package com.ssafy.a101;

import com.ssafy.a101.config.MqttPubConfig;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class A101Application {

	public static void main(String[] args) {
		SpringApplication.run(A101Application.class, args);
	}

}
