#pragma once

// header files
#include "EspMQTTClient.h"
#include <Adafruit_Sensor.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <DHT_U.h>
#include <iostream>
#include <HardwareSerial.h>

// macros
#define DHTPIN 13     // Digital pin connected to the DHT sensor 
#define DHTTYPE DHT11     // DHT 11
#define BROCKERIP "" // MQTT Brocker server IP
#define WIFINAME "" // wifi name
#define WIFIPW "" // wifi password
#define PORT 1883 // The MQTT port
#define MINTEMP 20 // minimun temperature
#define MAXTEMP 50 // maximum temperature
#define MINHUMID 20 // minimum humidity
#define MAXHUMID 50 // maximum humidity
#define TXD_PIN 17 // serial transmit pin
#define RXD_PIN 16 // serial receive pin

// struct
struct Info {
	float temp, humid;
	bool light;

  Info() {
    temp = 0.0f, humid = 0.0f;
    light = 0;
  }
};
// actuator status;
struct Status {
  bool cooling;
  bool waterfall;
  bool heat;
  bool humidifier;
  int led;
  bool islock;
};

// Timer
unsigned long prev_time = 0;
const unsigned long interval_time = 2000;  // 대기할 시간 (밀리초)

// water pump moter
extern const int AA = 27;  
extern const int AB = 26;   
// humidifier module
extern const int hud_pin = 25;
// cooling fan
extern const int cool_pin = 12;
// heat pad
extern const int heat_pin = 14;

// LED
const int freq = 5000;
const int ch = 0;
const int resolution = 8;
const int LED = 2;