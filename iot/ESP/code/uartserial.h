#pragma once
#include "header.h"

HardwareSerial mySerial(2);

struct UartSerial {
  String data;

  UartSerial() {
    data = "";
  }

  void init() {
    mySerial.begin(115200, SERIAL_8N1, 16, 17);
  }

  void statusTx(const char* send_data) {
    mySerial.write(send_data);
    Serial.println(send_data);
  }

  Status statusRx() {
    Status flag;
    if (mySerial.available() > 0) {
      data = mySerial.readString();
      Serial.println(data);
      // read json data
      StaticJsonDocument<200> doc;
      deserializeJson(doc, data);

      flag.led = doc["LED"];
      flag.waterfall = doc["waterfall"];
      flag.cooling = doc["cooling_fan"];
      flag.heat = doc["heat_pad"];
      flag.humidifier = doc["humidifier"];
      flag.islock = doc["lock"];
      
      Serial.println();
      return flag;
    }
    return {0,0,0,0,-1,1};
  }
};

