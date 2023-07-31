#pragma once
#include "header.h"

char* topic = "serialnumber/sensorval";
char* get_topic = "serialnumber/setval";
char* common_topic = "actset";
char* status_topic = "actstatus";

EspMQTTClient client(
  WIFINAME,
  WIFIPW,
  BROCKERIP,
  "MQTTUsername",
  "MQTTPassword",
  "ESP32",
  PORT
);

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

  String makeStatusJson(Status status) {
    DynamicJsonDocument doc(200);

    char res[20] = { 0, };
    sprintf(res, "%d", status.led);
    doc["LED"] 
    = res;
    String tmp = "";
    if(status.heat) tmp = "ON";
    else tmp = "OFF";
    doc["heat_pad"] = tmp;
    if(status.cooling) tmp = "ON";
    else tmp = "OFF";
    doc["cooling_fan"] = tmp;
    if(status.humidifier) tmp = "ON";
    else tmp = "OFF";
    doc["humidifier"] = tmp;
    if(status.waterfall) tmp = "ON";
    else tmp = "OFF";
    doc["waterfall"] = tmp;

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
  
  void updataData(Info info) {
    val.temp = info.temp;
    val.humid = info.humid;
    val.light = info.light;
  }

  void errorTx(char* err_topic, char* err_type) {
    client.publish(err_topic, err_type);
  }
  void tx() {
    client.publish(topic, data);
    data = "";
  }
  void statustx() {
    client.publish(status_topic, data);
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