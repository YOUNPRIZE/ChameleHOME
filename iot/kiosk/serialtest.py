import serial 
import time
import json

ser = serial.Serial('/dev/ttyAMA2', 115200)

ser.flushInput()

while True:
    print('a')
    if ser.readable():
        res = ser.readline()
        data = json.loads(res.decode()[:-1])
        print(data)
        #print(res.decode()[:len(res)-1])

