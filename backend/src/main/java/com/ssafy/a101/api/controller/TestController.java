package com.ssafy.a101.api.controller;

import com.ssafy.a101.config.MqttPubConfig;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public void testing() throws MqttException {
        System.out.println("test");
        MqttPubConfig config = new MqttPubConfig();
        new Thread(new Runnable() {
            @Override
            public void run() {
                String msg = "sendmsgfromjava";
                config.send("test/j", msg);
                config.close(); // 작업 완료되면 종료
            }
        }).start();
    }
}
