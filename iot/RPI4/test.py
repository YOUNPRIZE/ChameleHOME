# module for camera
import cv2
from flask import Flask, Response

# module for servo moter
import pigpio

# module for mqtt protocol
import paho.mqtt.client as mqtt

# module for multithreading
import threading
import time

# camera server
app = Flask(__name__)


def generate_frames():

    # Get frames from camera on infinite loop

    # Open the Raspberry Pi camera
    cap = cv2.VideoCapture(0)

    # Set width and height  320,240
    cap.set(3,1024)
    cap.set(4,768)

    # Start loop 
    while True:

        # Read a frame from the camera
        ret, frame = cap.read()

        # Check getting correct frame
        if not ret:
            break

        # Encode the frame in JPEG format
        ret, buffer = cv2.imencode('.jpg', frame)

        # Convert the frame to bytes
        frame_bytes = buffer.tobytes()

        # Yield the frame as a byte string for streaming
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    # Release the camera
    cap.release()


# Flask servor routing
@app.route('/')
def video_feed():

    # Return the streaming response
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


# servo moter
def set_servo_angle(pin, angle):

    # arg1 : pin is pin number
    # arg2 : angle is degree you want to set for servo
    # set frequency, dutycycle to make servo angle

    # set servo_pin frequency
    servo_pin = pin
    pi.set_PWM_frequency(servo_pin, 50)

    # get angle for now
    nowangle = get_servo_angle(servo_pin)

    # adjust servo untill nowangle is same for angle
    while nowangle != angle:
        if nowangle < angle:
            nowangle = nowangle + 1
        else:
            nowangle = nowangle - 1

        # get dutycycle for newangle
        dutycycle =  int(nowangle/180.0*255)
        # set dutycycle
        pi.set_PWM_dutycycle(servo_pin, dutycycle)
        # delay
        time.sleep(0.1)
    
    # it's finish
    print('finish')


def get_servo_angle(pin):

    # arg : pin is pin_number
    # get angle for now

    duty = pi.get_PWM_dutycycle(pin)
    return int(duty/255.0*180)


# init pigpio
pi = pigpio.pi()
# set init frequency, dutycycle
pi.set_PWM_frequency(18, 50)
pi.set_PWM_range(18,2000)
pi.set_PWM_dutycycle(18, int(90/180.0*255))

pi.set_PWM_frequency(13, 50)
pi.set_PWM_range(13,2000)
pi.set_PWM_dutycycle(13, int(90/180.0*255))

# delay
time.sleep(1)


#mqtt
def on_connect(client, userdata, flags, rc):
    # arg1 : client is Clinet object for mqtt
    # arg2 : userdata 

    # subscribe topic "angle"
    client.subscribe("angle")

# set two servos in order
flag = 0

def on_message(client, userdata, msg):
    # arg1 : client is Clinet object for mqtt
    # arg2 : userdata 
    # arg3 : msg is data for mqtt communication
    

    #data = json.loads(msg.payload.decode('utf-8'))
    global flag
    flag = flag + 1

    # decode meg to utf-8
    msg.payload = msg.payload.decode("utf-8")

    # set angle for msg degree
    if flag % 2 == 0:
        set_servo_angle(18, int(msg.payload))
    else:
        set_servo_angle(13, int(msg.payload))

    # print(msg)
    print(msg.payload)

# init mqtt client
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("18.233.166.123", 1883, 60)

def mqtt_thread():
    # inifinite loop for mqtt communication
    while True:
        client.loop_forever()

def main():
    # multithreading mqtt_tjhread, app_thread
    try:
        t1 = threading.Thread(target=mqtt_thread)
        t1.start()
        while True:
            app.run(host='0.0.0.0', port=5000, debug=True)

    # to exit use Keyboard Interrupt
    except KeyboardInterrupt:
        t1.join()


if __name__ == '__main__':
    main()
    
