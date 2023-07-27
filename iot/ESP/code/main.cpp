#include "header.h"
#include "mqtt.h"
#include "sensing.h"
#include "actuator.h"

MQTT mqtt;
Sensor sensor;
Info now_val, set_val;
// to control actuator
WaterMotor water_motor;
CoolingFan cool_fan;
HeatPad heat_pad;
Humidifier humidifier;
LEDControl led_ctrl;
// actuator status
bool cooling_status;
bool waterfall_status;
bool heat_status;
bool humidifier_status;
int led_val;
// error
bool flag;
// timer 
uint32_t delay_ms;

void getStatus() {
  waterfall_status = water_motor.statusCheck();
  heat_status = heat_pad.statusCheck();
  humidifier_status = humidifier.statusCheck();
  cooling_status = cool_fan.statusCheck();
  led_val = led_ctrl.statusCheck();
}

void actuate(int w, int hud, int heat, int cool) {
  if(w) water_motor.on();
  else water_motor.off();

  if(hud) humidifier.on();
  else humidifier.off();
  
  if(heat) heat_pad.on();
  else heat_pad.off();
  
  if(cool) cool_fan.on();
  else cool_fan.off();

  getStatus();
}

void setup() {
  Serial.begin(115200);
  sensor_t sensor_tmp;
  delay_ms = sensor_tmp.min_delay/1000;
  mqtt.init();
  sensor.init(sensor_tmp);
  actuatorInit();
}

void onConnectionEstablished()
{
  client.subscribe(get_topic, [](const String& payload) {
    Serial.println(payload);
    StaticJsonDocument<200> doc;
    deserializeJson(doc, payload);
    serializeJson(doc, Serial);

    // 온도, 습도, 조명
    set_val.temp = doc["temp"];
    set_val.humid = doc["humid"];
    set_val.light = doc["uv"];
  });
  client.subscribe(common_topic, [](const String& payload) {
    Serial.print(payload);
    StaticJsonDocument<200> doc;
    deserializeJson(doc, payload);
    
    int lval = doc["LED"];
    int wflag = doc["waterfall"];
    int cflag = doc["cooling_fan"];
    int htflag = doc["heat_pad"];
    int hudflag = doc["humidifier"];
    Serial.println(wflag);

    actuate(wflag, hudflag, htflag, cflag);
  });
}

void loop() {
  unsigned long cur_time = millis();
  unsigned long cur_time2 = millis();
  unsigned long prev_time2 = prev_time;

  if(cur_time2 - prev_time2 >= 1000) {
    mqtt.makeStatusJson(led_val, heat_status, cooling_status, humidifier_status, waterfall_status);
    mqtt.statustx();
  }

  if (cur_time - prev_time >= interval_time) {
    prev_time = cur_time;
    
    now_val = sensor.sensing();
    mqtt.updataData(now_val);
    mqtt.makeJson();
    mqtt.tx();
  }
  client.loop();

  // Serial.println("test");
}