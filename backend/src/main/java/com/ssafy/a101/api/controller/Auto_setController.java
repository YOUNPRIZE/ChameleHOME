package com.ssafy.a101.api.controller;


import com.ssafy.a101.api.request.AddAuto_setRequest;
import com.ssafy.a101.api.request.UpdateAuto_setRequest;
import com.ssafy.a101.api.response.Auto_setResponse;
import com.ssafy.a101.api.response.CageResponse;
import com.ssafy.a101.api.service.Auto_setService;
import com.ssafy.a101.db.entity.Auto_set;
import com.ssafy.a101.db.entity.Cage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
public class Auto_setController {

    private final Auto_setService autoSetService;



    // 전체 세팅 조회
    @GetMapping("/api/{cage_id}/setting")
    public ResponseEntity<List<Auto_setResponse>> findAllAutoset(@PathVariable Long cage_id){
        List<Auto_setResponse> autosets = autoSetService.findALL(cage_id)
                .stream()
                .map(Auto_setResponse::new)
                .collect(Collectors.toList());

        return ResponseEntity.ok()
                .body(autosets);
    }








    // 특정 세팅 조회
    @GetMapping("/api/setting/{set_id}")
    public ResponseEntity<Auto_setResponse> findAutoset(@PathVariable long set_id){
        Auto_set autoset = autoSetService.findById(set_id);

        return ResponseEntity.ok()
                .body(new Auto_setResponse(autoset));
        //id에 들어온 값을 조회한다.
    }


    //세팅 추가
    @PostMapping("/api/setting")
    public ResponseEntity<Auto_set> addAutoset(@RequestBody AddAuto_setRequest request){
        Auto_set autoSet = autoSetService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(autoSet);
    }

    //세팅 수정\
    @PutMapping("/api/setting/{set_id}")
    public ResponseEntity<Auto_set> updateAutoset(@PathVariable long set_id,
                                                  @RequestBody UpdateAuto_setRequest request) {
        Auto_set updateAutoset = autoSetService.update(set_id, request);

        return ResponseEntity.ok()
                .body(updateAutoset);

    }


    //세팅 삭제
    @DeleteMapping("/api/setting/{set_id}")
    public ResponseEntity<Void> deleteAutoset(@PathVariable long set_id){
        autoSetService.delete(set_id);

        return ResponseEntity.ok()
                .build();
    }


    // MQTT 존
    // auto set controller 에서 값을 받아온다음 그 값을 전달을 해야한다.

    //온도 전달


    // 습도 전달

    // uv 전달





    
}
