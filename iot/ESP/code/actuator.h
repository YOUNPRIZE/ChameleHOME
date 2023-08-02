#pragma once
#include "header.h"

// water pump motor
struct WaterMotor {
  bool status;

  void on() {
    digitalWrite(AA, HIGH); 
    digitalWrite(AB, LOW);
    status = 1;
  }

  void off() {
    digitalWrite(AA, LOW); 
    digitalWrite(AB, LOW);
    status = 0;
  }

  bool statusCheck() {
    if(status) return 1;
    else return 0;
  }
};
// cooling fan
struct CoolingFan {
  bool status;

  void on() {
    digitalWrite(cool_pin, HIGH); 
    status = 1;
  }

  void off() {
    digitalWrite(cool_pin, LOW); 
    status = 0;
  }

  bool statusCheck() {
    if(status) return 1;
    else return 0;
  }
};
// heat pad
struct HeatPad {
  bool status;

  void on() {
    digitalWrite(heat_pin, HIGH); 
    status = 1;
  }

  void off() {
    digitalWrite(heat_pin, LOW); 
    status = 0;
  }

  bool statusCheck() {
    if(status) return 1;
    else return 0;
  }
};
// humidifier
struct Humidifier {
  bool status;

  void on() {
    digitalWrite(hud_pin, HIGH); 
    status = 1;
  }
  void off() {
    digitalWrite(hud_pin, LOW); 
    status = 0;
  }
  bool statusCheck() {
    if(status) return 1;
    else return 0;
  }
};
// led on/off/setvalue
struct LEDControl {
  int status;
  LEDControl() {
    status = 0;
  }
  void setLight(int val) {
    if(val > 255) val = 255;
    if(val < 0) val = 0;
    ledcWrite(ch, val);
    status = val;
  }
  bool on() {
    for(int i=0;i<255;i+=50){
      if(i > 255) break;
      ledcWrite(ch, i);
      status = 255;
    }
    return 1;
  }
  bool off() {
    for(int i = status;i >= 0;i -= 50){
      if(i < 0) break;
      ledcWrite(ch, i);
      status = 0;
    }
    return 0;
  }
  bool statusCheck() {
    return status;
  }
};

void actuatorInit() {
  // water pump
  pinMode(AA, OUTPUT);  
  pinMode(AB, OUTPUT);  

  // cooling fan
  pinMode(cool_pin, OUTPUT);
  // heating pad
  pinMode(heat_pin, OUTPUT);
  // humidifier
  pinMode(hud_pin, OUTPUT);
  // led set
  ledcSetup(ch, freq, resolution);
  ledcAttachPin(LED, ch);
}

void validation_check() {

}

void autoHumid(const Info set_val, Info now_val, Humidifier humidifier, CoolingFan cool_fan, bool& humid_flag, bool& err_flag) {
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
    humidifier.off();
    cool_fan.off();
    humid_flag = 0;
  }
  // #4. 이상한 셋팅값
  if(set_val.humid > MAXHUMID || set_val.humid < MINHUMID) {
    humidifier.off();
    cool_fan.off();
    err_flag = 1;
  }
}

void autoTemp(const Info set_val, Info now_val, HeatPad heat_pad, CoolingFan cool_fan, bool& temp_flag, bool& err_flag) {
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
   // #4. 이상한 셋팅값
  if(set_val.temp > MAXTEMP || set_val.temp < MINTEMP) {
    heat_pad.off();
    cool_fan.off();
    err_flag = 1;
  }
}

// get status
Status getStatus(WaterMotor water_motor, Humidifier humidifier, HeatPad heat_pad, CoolingFan cool_fan, LEDControl led_ctrl) {
  Status status_flag;
  status_flag.waterfall = water_motor.statusCheck();
  status_flag.heat = heat_pad.statusCheck();
  status_flag.humidifier = humidifier.statusCheck();
  status_flag.cooling = cool_fan.statusCheck();
  status_flag.led = led_ctrl.statusCheck();
  return status_flag;
}

// act modules following value of RPI4
void actuate(const Status set_flag, WaterMotor water_motor, Humidifier humidifier, HeatPad heat_pad, CoolingFan cool_fan, LEDControl led_ctrl) {
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
}

