import cv2
import numpy as np

# Load YOLO model
net = cv2.dnn.readNet("yolov3.weights", "yolov3.cfg")
classes = []
with open("coco.names", "r") as f:
    classes = [line.strip() for line in f.readlines()]


# Add your reptile class names here
reptile_labels = ["snake", "lizard", "tortoise", "alligator", "crocodile"]


# display camera
def print():
    # get information from 0'th device
    cap = cv2.VideoCapture(0)

    # set frame 320 * 240
    cap.set(3,320)
    cap.set(4,240)

    # display camera
    while True:

        # read frame from cap
        ret, frame = cap.read()
    
        # Perform object detection
        blob = cv2.dnn.blobFromImage(frame, scalefactor=0.00392, size=(416, 416), swapRB=True, crop=False)
        net.setInput(blob)
        outs = net.forward(output_layers)
        
        class_ids = []
        confidences = []
        boxes = []
    
        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.5 and classes[class_id] in reptile_labels:
                    # Object detected is a reptile
                    # Extract bounding box information
                    center_x = int(detection[0] * frame.shape[1])
                    center_y = int(detection[1] * frame.shape[0])
                    width = int(detection[2] * frame.shape[1])
                    height = int(detection[3] * frame.shape[0])
                    # Calculate bounding box coordinates
                    x = int(center_x - width / 2)
                    y = int(center_y - height / 2)
                    # Add bounding box coordinates and other information to lists
                    class_ids.append(class_id)
                    confidences.append(float(confidence))
                    boxes.append([x, y, width, height])

    # Non-maximum suppression to remove overlapping boxes
    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
    
    font = cv2.FONT_HERSHEY_PLAIN
    colors = np.random.uniform(0, 255, size=(len(classes), 3))
    
    for i in range(len(boxes)):
        if i in indexes:
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            color = colors[class_ids[i]]
            cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
            cv2.putText(frame, label, (x, y + 30), font, 1, color, 2)



    # Display the frame with bounding boxes
    cv2.imshow('Reptile Detection', frame)
        

    # display camera 
    #cv2.imshow('video', frame)
		
    # destory window
    if cv2.waitKey(1) & 0xff == ord('q'):
        break

cap.release()
cv2.destoryAllwindosws()


print()




    

