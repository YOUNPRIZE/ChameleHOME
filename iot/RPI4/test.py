#camera
import cv2
from flask import Flask, Response

#mqtt
import paho.mqtt.client as mqtt

#multi threading
import threading

#servo
import time
import pigpio

# camera server
app = Flask(__name__)

def generate_frames():
    # Open the Raspberry Pi camera
    cap = cv2.VideoCapture(0)

    cap.set(3,320)
    cap.set(4,240)


    while True:
        # Read a frame from the camera
        ret, frame = cap.read()

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


@app.route('/')
def video_feed():
    # Return the streaming response
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')


# servo moter
def set_servo_angle(pin, angle):

    servo_pin = pin

    pi.set_PWM_frequency(servo_pin, 50)


    nowangle = get_servo_angle(servo_pin)

    while nowangle != angle:
        if nowangle < angle:
            nowangle = nowangle + 1
        else:
            nowangle = nowangle - 1

        dutycycle =  int(nowangle/180.0*255)
        pi.set_PWM_dutycycle(servo_pin, dutycycle)
        time.sleep(0.1)
    print('a')

def get_servo_angle(pin):
    duty = pi.get_PWM_dutycycle(pin)
    return int(duty/255.0*180)



pi = pigpio.pi()

pi.set_PWM_frequency(18, 50)
pi.set_PWM_range(18,2000)
pi.set_PWM_dutycycle(18, int(90/180.0*255))

pi.set_PWM_frequency(13, 50)
pi.set_PWM_range(13,2000)
pi.set_PWM_dutycycle(13, int(90/180.0*255))

time.sleep(1)


#mqtt
def on_connect(client, userdata, flags, rc):
    client.subscribe("angle")

flag = 0

def on_message(client, userdata, msg):
    #data = json.loads(msg.payload.decode('utf-8'))
    print(msg.payload)
    global flag
    flag = flag + 1
    msg.payload = msg.payload.decode("utf-8")

    if flag % 2 == 0:
        set_servo_angle(18, int(msg.payload))
    else:
        set_servo_angle(13, int(msg.payload))
    print(msg.payload)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("34.207.95.117", 1883, 60)

def mqtt_thread():
    while True:
        client.loop_forever()

def app_thread():
    app.run(host='0.0.0.0', port=5000, debug=True)

def main():
    try:
        t1 = threading.Thread(target=mqtt_thread)
        t1.start()
        while True:
            app.run(host='0.0.0.0', port=5000, debug=True)

    except KeyboardInterrupt:
        t1.join()

main()

#if __name__ == '__main__':
#    app.run(host='0.0.0.0', port=5000, debug=True)
    
