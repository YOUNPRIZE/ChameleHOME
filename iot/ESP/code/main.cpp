#include "header.h"
#include "mqtt.h"
#include "sensing.h"
#include "actuator.h"
#include "uartSerial.h"

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
Status status_flag;
// error
bool err_flag;
// timer 
uint32_t delay_ms;
// data
String data = "";

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

void autoSet(Status set_flag) {
  if(temp_flag && set_flag.islock) {
    autoTemp(set_val, now_val, heat_pad, cool_fan, temp_flag, err_flag);
  }
  if(humid_flag && set_flag.islock) {
    autoHumid(set_val, now_val, humidifier, cool_fan, humid_flag, err_flag);
  }
  if(!status_flag.led && set_val.light) {led_ctrl.on();}
  if(status_flag.led && !set_val.light) {led_ctrl.off();}
}

void setup() {
  Serial.begin(115200);
  sensor_t sensor_tmp;
  delay_ms = sensor_tmp.min_delay/1000;
  mqtt.init();
  sensor.init(sensor_tmp);
  actuatorInit();
  userial.init();
  status_flag.islock = 1;
}

void loop() {
  // current time
  unsigned long cur_time = millis();
  // receive RPI4 data
  Status set_flag;
  set_flag = userial.statusRx();
  // actuate by RPI4
  if(set_flag.led != -1 && !set_flag.islock) {
    actuate(set_flag, water_motor, humidifier, heat_pad, cool_fan, led_ctrl);
    status_flag = getStatus(water_motor, humidifier, heat_pad, cool_fan, led_ctrl);
     // transmit status data to RPI4
    data = mqtt.makeStatusJson(status_flag);
    data += "\n";
    userial.statusTx(data.c_str());
  }
  // actuate by web setting
  autoSet(set_flag);

  if (cur_time - prev_time >= interval_time) {
    prev_time = cur_time;
    // get temperature and humidity
    now_val = sensor.sensing();
    mqtt.updataData(now_val);
    now_val.light = status_flag.led;
    // // transmit status data to RPI4
    status_flag = getStatus(water_motor, humidifier, heat_pad, cool_fan, led_ctrl);
    data = mqtt.makeStatusJson(status_flag);
    data += "\n";
    userial.statusTx(data.c_str());
    data = "";
    // transmit temperature and humidity data to web
    mqtt.makeJson();
    mqtt.tx();
  }

  client.loop();
}