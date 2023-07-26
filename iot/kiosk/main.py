#qt
from PySide2.QtWidgets import *
from kiosk import Ui_MainWindow

import paho.mqtt.client as mqtt
import json

def on_connect(client, userdata, flags, rc):
    client.subscribe("togle")

def on_message(client, userdata, msg):
    print(msg.payload)


def on_publish(client, userdata, mid):
    print("In on_pub callback mid= ", mid)

class MyApp(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        Ui_MainWindow.setupUi(self, self)
        self.main()

    def main(self):
        pass
    
    def fan_on(self):
        print("fan")
        client.publish("fan", 1)

    def heat_on(self):
        print("heat")
        client.publish("fan", 0)
        pass

    def humidifier_on(self):
        print("humi")
        pass

    def waterfall_on(self):
        print("water")

    def temp_lock(self):
        print("tlock")

    def humid_lock(self):
        print("hlock")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("13.125.61.114", 1883, 60)



app = QApplication()
win = MyApp()

win.show()
app.exec_()
