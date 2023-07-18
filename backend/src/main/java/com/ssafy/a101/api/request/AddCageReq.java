package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.Cage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddCageReq {
    private String cage_name;
    private Date alarm;
    private int set_temp;
    private int set_hum;
    private int set_uv;
    private boolean using;

    // toEntity는 빌더 패턴을 사용해 DTO를 엔티티로 만들어주는 메서드이다.
    // 해당 메서드는 추후에 글을 추가할 때 저장할 엔티티로 변환하는 용도로 사용함
    public Cage toEntity() {
        return Cage.builder()
                .cage_name(cage_name)
                .alarm(alarm)
                .set_temp(set_temp)
                .set_hum(set_hum)
                .set_uv(set_uv)
                .using(using)
                .build();
    }
}
