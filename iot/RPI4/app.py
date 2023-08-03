import cv2
from flask import Flask, Response

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

if __name__ == '__main__':
    app.run(host='192.168.114.97', port=5000, debug=True)
