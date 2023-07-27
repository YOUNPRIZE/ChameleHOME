#pragma once
#include "header.h"

DHT_Unified dht(DHTPIN, DHTTYPE);

struct Sensor {
  Info data;
  
  void init(sensor_t sensor) {
    dht.begin();
    dht.temperature().getSensor(&sensor);
    dht.humidity().getSensor(&sensor);
  }

  Info sensing() {
    sensors_event_t event;
    dht.temperature().getEvent(&event);
    data.temp = event.temperature;
    
    dht.humidity().getEvent(&event);
    data.humid = event.relative_humidity;

    return data;
  }
};