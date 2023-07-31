#include "header.h"
#include "mqtt.h"
#include "sensing.h"
#include "actuator.h"
#include "uartserial.h"

MQTT mqtt;
UartSerial userial;
Sensor sensor;
Info now_val, set_val;
// to control actuator
WaterMotor water_motor;
CoolingFan cool_fan;
HeatPad heat_pad;
Humidifier humidifier;
LEDControl led_ctrl;
bool temp_flag, humid_flag;
// actuator status
Status statusflag;

// error
bool err_flag;
// timer 
uint32_t delay_ms;
// data
String data = "";

// get status
void getStatus() {
  statusflag.waterfall = water_motor.statusCheck();
  statusflag.heat = heat_pad.statusCheck();
  statusflag.humidifier = humidifier.statusCheck();
  statusflag.cooling = cool_fan.statusCheck();
  statusflag.led = led_ctrl.statusCheck();
}
// act modules following value of RPI4
void actuate(Status set_flag) {
  if(set_flag.waterfall) water_motor.on();
  else water_motor.off();

  if(set_flag.humidifier) humidifier.on();
  else humidifier.off();
  
  if(set_flag.heat) heat_pad.on();
  else heat_pad.off();
  
  if(set_flag.cooling) cool_fan.on();
  else cool_fan.off();

  if(set_flag.led) led_ctrl.setLight(set_flag.led);
  else led_ctrl.off();
  getStatus();
}

void autoTemp() {
  // temperature
  // #1. 희망온도가 현재온도 보다 낮을때
  if(set_val.temp < now_val.temp - 3) {
    heat_pad.off();
    cool_fan.on();
  }
  // #2. 희망온도가 현재온도보다 높을때
  else if(set_val.temp > now_val.temp + 3) {
    heat_pad.on();
    cool_fan.off();
  }
  // #3. 범위 내일때
  else if(set_val.temp < now_val.temp + 3 && set_val.temp > now_val.temp - 3) {
    heat_pad.off();
    cool_fan.off();
    temp_flag = 0;
  }
  // LED
}

void autoHumid() {
  // Humid
  // #1. 희망습도가 현재습도 보다 낮을때
  if(set_val.humid < now_val.humid - 3) {
    humidifier.on();
    cool_fan.off();
  }
  // #2. 희망습도가 현재습도보다 높을때
  else if(set_val.humid > now_val.humid + 3) {
    humidifier.off();
    cool_fan.on();
  }
  // #3. 범위 내일때
  else if(set_val.humid < now_val.humid + 3 && set_val.humid > now_val.humid - 3) {
    heat_pad.off();
    cool_fan.off();
    humid_flag = 0;
  }
}

void onConnectionEstablished()
{
  client.subscribe(get_topic, [](const String& payload) {
    Serial.println(payload);
    StaticJsonDocument<200> doc;
    deserializeJson(doc, payload);
    serializeJson(doc, Serial);

    // temperature, humidity, LED
    set_val.temp = doc["temp"];
    set_val.humid = doc["humid"];
    set_val.light = doc["uv"];

    if(set_val.temp) temp_flag = 1;
    if(set_val.humid) humid_flag = 1;
  });
}

void setup() {
  Serial.begin(115200);
  sensor_t sensor_tmp;
  delay_ms = sensor_tmp.min_delay/1000;
  mqtt.init();
  sensor.init(sensor_tmp);
  actuatorInit();
  userial.init();
  statusflag.islock = 1;
}


void loop() {
  unsigned long cur_time = millis();
  unsigned long cur_time2 = millis();
  unsigned long prev_time2 = prev_time;
  Status set_flag;
  set_flag = userial.statusRx();
  if(!set_flag.islock) {
    data = mqtt.makeStatusJson(statusflag);
    data += "\n";
    userial.statusTx(data.c_str());
    data = "";
  }
  if(set_flag.led != -1 && !set_flag.islock) {
    actuate(set_flag);
  }
  
  if(temp_flag && set_flag.islock) {
    autoTemp();
  }
  if(humid_flag && set_flag.islock) {
    autoHumid();
  }

  if (cur_time - prev_time >= interval_time) {
    prev_time = cur_time;
    
    now_val = sensor.sensing();
    mqtt.updataData(now_val);
    now_val.light = statusflag.led;
    data = mqtt.makeStatusJson(statusflag);
    data += "\n";
    userial.statusTx(data.c_str());
    data = "";
    mqtt.makeJson();
    mqtt.tx();
  }

  client.loop();
}
