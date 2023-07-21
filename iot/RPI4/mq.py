import paho.mqtt.client as mett
import json
from time import sleep

def on_connect(client, userdata, flags, rc):
    client.subscribe("angle")

def on_message(client, userdata, msg):
    #data = json.loads(msg.payload.decode('utf-8'))
    print(msg.payload)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("54.146.234.246", 1883, 60)

while True:
    print("hi")
    sleep(1)
    client.loop_forever()
