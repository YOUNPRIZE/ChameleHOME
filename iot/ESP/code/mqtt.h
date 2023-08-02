#pragma once
#include "header.h"
// set topics to communicate
char* topic = "serialnumber/sensorval";
char* get_topic = "serialnumber/setval";
char* common_topic = "actset";
char* status_topic = "actstatus";
// define client
EspMQTTClient client(
  WIFINAME,
  WIFIPW,
  BROCKERIP,
  "MQTTUsername",
  "MQTTPassword",
  "ESP32",
  PORT
);
// class for mqtt
struct MQTT {
  Info val;
  Info set_val;
  String data;

  MQTT() {
    data = "";
  }

  void init() {
    client.enableDebuggingMessages(); 
    client.enableHTTPWebUpdater(); 
    client.enableOTA();
  }

  //data to JSON format
  void makeJson() {
    data = "";
    DynamicJsonDocument doc(200);

    char res[20] = { 0, };
    sprintf(res, "%.1f", val.temp);
    doc["Temp"] = res;
    sprintf(res, "%.1f", val.humid);
    doc["Humid"] = res;
    doc["uv"] = String(val.light);

    // Serial.print("Json data : ");
    // serializeJson(doc, Serial);
    // Serial.println();
    serializeJson(doc, data);
  }
  //data to JSON format - for RPI4 
  String makeStatusJson(Status status) {
    DynamicJsonDocument doc(200);

    char res[20] = { 0, };
    sprintf(res, "%d", status.led);
    doc["LED"] = res;

    doc["heat_pad"] = status.heat;
    doc["cooling_fan"] = status.cooling;
    doc["humidifier"] = status.humidifier;
    doc["waterfall"] = status.waterfall;

    sprintf(res, "%.1f", val.temp);
    doc["Temp"] = res;
    sprintf(res, "%.1f", val.humid);
    doc["Humid"] = res;
    // Serial.print("Json data : ");
    // serializeJson(doc, Serial);
    // Serial.println();
    serializeJson(doc, data);
    return data;
  }
  // update data
  void updataData(Info info) {
    val.temp = info.temp;
    val.humid = info.humid;
    val.light = info.light;
  }
  
  void errorTx(char* err_topic, char* err_type) {
    client.publish(err_topic, err_type);
  }
  // transmit function
  void tx() {
    client.publish(topic, data);
    data = "";
  }

  // bool errorCheck(StaticJsonDocument<200> doc) {
  //   JsonVarient error_temp = doc["temp"];
  //   JsonVarient error_humid = doc["humid"];
  //   JsonVarient error_uv = doc["uv"];

  //   if(error_temp.isNull() || error_humid.isNull() || error_uv.isNull()) {
  //     return 1;
  //   }
  //   return 0;
  // }
};