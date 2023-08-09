package com.ssafy.a101.api.service;
import com.ssafy.a101.api.request.AddAuto_setRequest;
import com.ssafy.a101.api.request.UpdateAuto_setRequest;
import com.ssafy.a101.db.entity.Auto_set;
import com.ssafy.a101.db.repository.Auto_setRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.ejb.Schedule;
import java.sql.Time;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RequiredArgsConstructor // final  이 붙거나 @notnull  이 붙은 필드 생성자 추가
@Service //빈으로 등록
public class Auto_setService {


    private final Auto_setRepository autoSetRepository;

//    // 알람기능 설정하기
//    public Auto_setService(Auto_setRepository autoSetRepository) {
//        this.autoSetRepository = autoSetRepository;
//    }

    // 스케쥴 표를 확인해서 매 분마다 값을 확인
//    @Scheduled(cron = "0 * * * * *")
//    public void checkAlarms() {
//        LocalTime currentTime = LocalTime.now();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
//        String formattedCurrentTime = currentTime.format(formatter);
//        System.out.println("dfsdfsdfsdffds");
//        List<Auto_set> alarms = autoSetRepository.findByTime(Time.valueOf(formattedCurrentTime));
//
//        for (Auto_set alarm : alarms) {
//            System.out.println("Alarm 값: " + alarm.toString());
//            // 출력 로직을 만든다.
//            System.out.println("온도: " + alarm.getSet_temp());
//            System.out.println("습도: " + alarm.getSet_hum());
//            System.out.println("uv: " + alarm.getSet_uv());
//        }
//    }






    // 전체 세팅 값 조회
    public List<Auto_set> findALL(Long cage_id) {return autoSetRepository.findByCageId_CageId(cage_id);}


    // 특정 값 세팅 값 조회
    public Auto_set findById(Long id){
        return autoSetRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("업습니다."));
    }


    // 세팅 추가
    public Auto_set save(AddAuto_setRequest request){ return autoSetRepository.save(request.toEntity());}


    // 세팅 수정
    @Transactional
    public Auto_set update(long id, UpdateAuto_setRequest request){
        Auto_set auto_set = autoSetRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException(" wrong update"));

        auto_set.update(request.getTime(), request.getSet_temp(),  request.getSet_hum(), request.getSet_uv());
        return auto_set;
    }


    // 세팅 삭제
    public void delete(long id){autoSetRepository.deleteById(id);}


}
