package com.ssafy.a101.api.controller;


import com.ssafy.a101.api.request.AddAlarmRequest;
import com.ssafy.a101.api.request.UpdateAlarmRequest;
import com.ssafy.a101.api.response.AlarmResponse;
import com.ssafy.a101.api.service.AlarmService;
import com.ssafy.a101.db.entity.Alarm;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class AlarmController {

    private final AlarmService alarmService;

    // 전체 알람 조회
    @GetMapping("/api/{cage_id}/alarms")
    public ResponseEntity<List<AlarmResponse>> findAllAlarm(){
        List<AlarmResponse> alarms =  alarmService.findAll()
                .stream()
                .map(AlarmResponse::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok()
                .body(alarms);
    }



    // 특정 알람 조회
    @GetMapping("/api/alarm/{arm_id}")
    public ResponseEntity<AlarmResponse> findAlarm(@PathVariable long arm_id){
        Alarm alarm = alarmService.findByid(arm_id);

        return ResponseEntity.ok()
                .body(new AlarmResponse(alarm));
    }


    // 알람 추가
    @PostMapping("/api/alarm")
    public ResponseEntity<Alarm> addAlarm(@RequestBody AddAlarmRequest request){
        Alarm savedAlarm = alarmService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedAlarm);
    }



    // 알람 수정
    @PutMapping("/api/alarm/{arm_id}")
    public ResponseEntity<Alarm> updateAlarm(@PathVariable Long arm_id,
                                             @RequestBody UpdateAlarmRequest request){
        Alarm updatedAlarm = alarmService.update(arm_id, request);

        return ResponseEntity.ok()
                .body(updatedAlarm);
    }



    // 알람 삭제
    @DeleteMapping("/api/alarm/{arm_id}")
    public ResponseEntity<Void> deleteAlarm(@PathVariable long arm_id){
        alarmService.delete(arm_id);
        return ResponseEntity.ok()
                .build();
    }


}