#!/usr/bin/env python3 

#qt
from PySide2.QtWidgets import *
from kiosk import Ui_MainWindow
from PySide2.QtCore import Qt

#uart communication
import serial
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

def recieve_thread():
    while True:
        if ser.readable():
            res = ser.readline()
            data = json.loads(res.decode()[:-1])
            print(data)
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

def act_publish():
    pub_data = { "LED" : 0, "heat_pad" : False, "cooling_fan" : False, "humidifier" : False, "waterfall" : False, "lock" : 1}
    if win.lock_btn.text() == "UNLOCK":
        return
    else:
        pub_data["lock"] =  0
    pub_data["LED"] = win.horizontalSlider.value()
    pub_data["heat_pad"] = is_off(win.heat_btn.text())
    pub_data["cooling_fan"] = is_off(win.fan_btn.text())
    pub_data["humidifier"] = is_off(win.humidifier_btn.text())
    pub_data["waterfall"] = is_off(win.waterfall_btn.text())
    pub_data = json.dumps(pub_data)
    ser.write(pub_data.encode('utf-8'))
    
class MyApp(QMainWindow, Ui_MainWindow):
    def __init__(self):
        super().__init__()
        Ui_MainWindow.setupUi(self, self)
        self.main()
         
    def main(self):
        self.showFullScreen()
        self.setCursor(Qt.BlankCursor)
        pass
    
    def fan_on(self):
        print("fan")
        if win.lock_btn.text() == "UNLOCK":
            return
        if is_on(self.fan_btn.text()):
            self.fan_btn.setText("OFF")
        else:
            self.fan_btn.setText("ON")
        act_publish()
        time.sleep(0.5)

    def heat_on(self):
        print("heat")
        if win.lock_btn.text() == "UNLOCK":
            return
        if is_on(self.heat_btn.text()):
            self.heat_btn.setText("OFF")
        else:
            self.heat_btn.setText("ON")
        act_publish()
        time.sleep(0.5)

    def humidifier_on(self):
        print("humi")
        if win.lock_btn.text() == "UNLOCK":
            return
        if is_on(self.humidifier_btn.text()):
            self.humidifier_btn.setText("OFF")
        else:
            self.humidifier_btn.setText("ON")
        act_publish() 
        time.sleep(0.5)

    def waterfall_on(self):
        print("water")
        if win.lock_btn.text() == "UNLOCK":
            return
        if is_on(self.waterfall_btn.text()):
            self.waterfall_btn.setText("OFF")
        else:
            self.waterfall_btn.setText("ON")
        act_publish()

    def led_on(self):
        if win.lock_btn.text() == "UNLOCK":
            return
        act_publish()
    
    def lock_on(self):
        if self.lock_btn.text() == "LOCK":
            self.lock_btn.setText("UNLOCK")
        else:
            self.lock_btn.setText("LOCK")
        act_publish()
    

app = QApplication()
win = MyApp()
ser = serial.Serial('/dev/ttyAMA2', 115200)

def main():
    try:
        t1 = threading.Thread(target=recieve_thread)
        t1.start()
        win.show()
        app.exec_()

    except KeyboardInterrupt:
        t1.join()

if __name__ == '__main__':
    main()



