#pragma once
#include "header.h"

char* topic = "serialnumber/sensorval";
char* get_topic = "serialnumber/setval";

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
  String data;

  MQTT() {
    data = "";
  }

  void init() {
    client.enableDebuggingMessages(); 
    client.enableHTTPWebUpdater(); 
    client.enableOTA();
  }

  //데이터값을 Json으로 변환
  void makeJson() {
    DynamicJsonDocument doc(200);

    char res[20] = { 0, };
    sprintf(res, "%.1f", val.temp);
    doc["Temp"] = res;
    sprintf(res, "%.1f", val.humid);
    doc["Humid"] = res;
    doc["uv"] = String(val.light);

    Serial.print("Json data : ");
    serializeJson(doc, Serial);
    Serial.println();
    serializeJson(doc, data);
  }

  void updataData(Info info) {
    val.temp = info.temp;
    val.humid = info.humid;
    val.light = info.light;
  }

  void tx() {
    makeJson();
    client.publish(topic, data);
    data = "";
  }

  bool errorCheck(StaticJsonDocument<200> doc) {
    JsonVarient error_temp = doc["temp"];
    JsonVarient error_humid = doc["humid"];
    JsonVarient error_uv = doc["uv"];
  }
};