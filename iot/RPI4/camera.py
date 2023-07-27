import cv2
import numpy as np


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
        
        # display camera 
		cv2.imshow('video', frame)
		
    # destory window
		if cv2.waitKey(1) & 0xff == ord('q'):
			break
	cv2.destoryAllwindosws()


print()
