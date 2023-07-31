#!/usr/bin/env python3 

#qt
from PySide2.QtWidgets import *
from kiosk import Ui_MainWindow

#mqtt communication
import paho.mqtt.client as mqtt
import json

#multi threading
import threading
import time

def is_on(i):
    if i == "ON":
        return True
    else:
        return False

def is_off(i):
    if i == "OFF":
        return True
    else:
        return False

def on_connect(client, userdata, flags, rc):
    client.subscribe("actstatus")


def on_message(client, userdata, msg):
    data = json.loads(msg.payload.decode('utf-8', 'ignore'))
    if msg.topic == "actstatus":
        win.temp_val.setText(data["Temp"][0:2])
        win.humid_val.setText(data["Humid"][0:2])
        if is_off(data["cooling_fan"]):
            win.fan_btn.setText("ON")
        else:
            win.fan_btn.setText("OFF")

        if is_off(data["waterfall"]):
            win.waterfall_btn.setText("ON")
        else:
            win.waterfall_btn.setText("OFF")

        if is_off(data["humidifier"]):
            win.humidifier_btn.setText("ON")
        else:
            win.humidifier_btn.setText("OFF")

        if is_off(data["heat_pad"]):
            win.heat_btn.setText("ON")
        else:
            win.heat_btn.setText("OFF")
    print(data)


def mqtt_thread():
    while True:
        client.loop_forever()

def on_publish(client, userdata, mid):
    print("In on_pub callback mid= ", mid)

def act_publish(i):
    pub_data = { "LED" : 0, "heat_pad" : False, "cooling_fan" : False, "humidifier" : False, "waterfall" : False }
    pub_data["heat_pad"] = is_off(i.heat_btn.text())
    pub_data["cooling_fan"] = is_off(i.fan_btn.text())
    pub_data["humidifier"] = is_off(i.humidifier_btn.text())
    pub_data["waterfall"] = is_off(i.waterfall_btn.text())
    pub_data = json.dumps(pub_data)
    client.publish("actset", pub_data)

class MyApp(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        Ui_MainWindow.setupUi(self, self)
        self.main()

    def main(self):
        pass
    
    def fan_on(self):
        print("fan")
        if is_on(self.fan_btn.text()):
            self.fan_btn.setText("OFF")
        else:
            self.fan_btn.setText("ON")
        act_publish(self)
        time.sleep(0.5)

    def heat_on(self):
        print("heat")
        if is_on(self.heat_btn.text()):
            self.heat_btn.setText("OFF")
        else:
            self.heat_btn.setText("ON")
        act_publish(self)
        time.sleep(0.5)

    def humidifier_on(self):
        print("humi")
        if is_on(self.humidifier_btn.text()):
            self.humidifier_btn.setText("OFF")
        else:
            self.humidifier_btn.setText("ON")
        act_publish(self) 
        time.sleep(0.5)

    def waterfall_on(self):
        print("water")
        if is_on(self.waterfall_btn.text()):
            self.waterfall_btn.setText("OFF")
        else:
            self.waterfall_btn.setText("ON")
        act_publish(self)
        time.sleep(0.5)

    def temp_lock(self):
        print("tlock")

    def humid_lock(self):
        print("hlock")
    
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("18.233.166.123", 1883, 60)


app = QApplication()
win = MyApp()


def main():
    try:
        t1 = threading.Thread(target=mqtt_thread)
        t1.start()
        win.show()
        app.exec_()

    except KeyboardInterrupt:
        t1.join()

if __name__ == '__main__':
    main()



