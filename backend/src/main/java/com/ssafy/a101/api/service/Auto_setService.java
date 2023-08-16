package com.ssafy.a101.api.service;
import com.ssafy.a101.api.request.AddAuto_setRequest;
import com.ssafy.a101.api.request.UpdateAuto_setRequest;
import com.ssafy.a101.db.entity.Auto_set;
import com.ssafy.a101.db.entity.Cage;
import com.ssafy.a101.db.repository.Auto_setRepository;
import com.ssafy.a101.db.repository.CageRepository;
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
    private final CageRepository cageRepository;

    // 전체 세팅 값 조회
    public List<Auto_set> findALL(Long cage_id) {return autoSetRepository.findByCageId_CageId(cage_id);}


    // 특정 값 세팅 값 조회
    public Auto_set findById(Long id){
        return autoSetRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("업습니다."));
    }

    // 세팅 추가
    public Auto_set save(AddAuto_setRequest request){
        Cage cage = cageRepository.findById(request.getCageId()).orElseThrow(()-> new IllegalArgumentException("cage error"));
        Auto_set auto_set = request.toEntity();
        auto_set.setCageId(cage);
        return autoSetRepository.save(auto_set);
    }

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
