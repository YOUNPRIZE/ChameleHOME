#include "header.h"
#include "mqtt.h"
#include "sensing.h"

MQTT mqtt;
Sensor sensor;
Info now_val, set_val;
// error
bool flag;
// timer 
uint32_t delay_ms;

void setup() {
  Serial.begin(115200);
  sensor_t sensor_tmp;
  delay_ms = sensor_tmp.min_delay/1000;
  mqtt.init();
  sensor.init(sensor_tmp);
}

void onConnectionEstablished()
{
  client.subscribe(get_topic, [](const String& payload) {
    Serial.println(payload);
    StaticJsonDocument<200> doc;
    deserializeJson(doc, payload);
    serializeJson(doc, Serial);

    mqtt.errorCheck(doc);
    
    // 온도, 습도, 조명
    set_val.temp = doc["temp"];
    set_val.humid = doc["humid"];
    set_val.light = doc["uv"];
  });
}

void loop() {
  unsigned long cur_time = millis();
  if (cur_time - prev_time >= interval_time) {
    prev_time = cur_time;
    
    now_val = sensor.sensing();
    mqtt.updataData(now_val);
    mqtt.tx();
  }
  client.loop();
  // Serial.println("test");
}
