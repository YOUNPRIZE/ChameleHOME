package com.ssafy.a101;

import com.ssafy.a101.config.MqttPubConfig;
import com.ssafy.a101.db.entity.Auto_set;
import com.ssafy.a101.db.entity.Cage;
import com.ssafy.a101.db.repository.Auto_setRepository;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.sql.Time;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@SpringBootApplication
@EnableScheduling
public class A101Application {

	@Autowired
	private ApplicationContext context;

	public static void main(String[] args) throws MqttException {
		ConfigurableApplicationContext context = SpringApplication.run(A101Application.class, args);


	}

	@Transactional
	@Scheduled(cron = "0 * * * * *") // 매 분의 0초마다 실행
	public void checkAlarms() throws MqttException {
		MqttPubConfig sender = new MqttPubConfig();

		LocalTime currentTime = LocalTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
		String formattedTime = currentTime.format(formatter);

		Auto_setRepository auto_setRepository = context.getBean(Auto_setRepository.class);




		auto_setRepository.findAll().forEach((autoSet -> {
			Long autoSetCageId =autoSet.getCageId();

			//if (autoSet.getTime().equals(formattedTime)) {
			System.out.println("케이지 아이디 값입니다." + autoSetCageId);

			 //mqtt 통신 부분 / start 까지
				new Thread(new Runnable() {
				Long temp = autoSet.getSet_temp();
				Long hum = autoSet.getSet_hum();
				Long uv = autoSet.getSet_id();
					@Override
					public void run() {
						String msg = "{" +
								"\"Temp\"" + ":" + "\"" + temp + "\"" +
								",\"Humid\"" + ":" + "\"" + hum + "\"" +
								",\"uv\"" + ":" + "\"" + uv + "\"" +
								"}";

						System.out.println(msg);

						sender.send("1/setval", msg);  //  토픽,  보낼 메세지
						sender.close(); // 작업 완료되면 종료
					}
				}).start();
			//}
		}));
	}
}
