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

struct LEDControl {
  int status;
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
    for(int i = 255;i >= 0;i -= 50){
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
  pinMode(AA, OUTPUT);  
  pinMode(AB, OUTPUT);  

  // cooling fan
  pinMode(cool_pin, OUTPUT);
  // heating pad
  pinMode(heat_pin, OUTPUT);

  pinMode(hud_pin, OUTPUT);

  ledcSetup(ch, freq, resolution);
  ledcAttachPin(LED, ch);
}

void validation_check() {

}