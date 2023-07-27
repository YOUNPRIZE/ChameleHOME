import paho.mqtt.client as mqtt
import threading
import time

i = 0

def prin():
    global i
    while True:
        print(i)
        time.sleep(1)

def scan():
    global i
    i = int(input())
    time.sleep(2)

def main():
    print("thread & message queue example")
    try:
        t1 = threading.Thread(target=prin)
        t1.start()
        t2 = threading.Thread(target=scan)
        t2.start()
        while True:
            time.sleep(0.1)

    except KeyboardInterrupt:
        t1.join()
        t2.join()

main()
