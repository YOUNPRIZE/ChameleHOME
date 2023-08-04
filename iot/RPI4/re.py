import cv2
import numpy as np
import time

# Load YOLO
net = cv2.dnn.readNet("yolov3-tiny.weights", "yolov3-tiny.cfg")
classes = []
with open("coco.names", "r") as f:
    classes = f.read().strip().split("\n")

# Initialize the camera
camera = cv2.VideoCapture(0)  # Use the appropriate camera index if not the default

# Set camera resolution
camera.set(3, 640)  # Width
camera.set(4, 480)  # Height

while True:
    ret, frame = camera.read()
    if not ret:
        break
    height, width, _ = frame.shape

    # Preprocess image
    blob = cv2.dnn.blobFromImage(frame, scalefactor=1/255.0, size=(416, 416), swapRB=True, crop=False)
    net.setInput(blob)

    # Perform forward pass
    layer_names = net.getUnconnectedOutLayersNames()
    outs = net.forward(layer_names)

    # Process and display detections
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5:  # Set a confidence threshold
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                label = f"{classes[class_id]}: {confidence:.2f}"
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    # Display the frame
    cv2.imshow("Real-time Object Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    print('n')
# Release resources
camera.release()
cv2.destroyAllWindows()
