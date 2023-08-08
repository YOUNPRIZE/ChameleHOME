package com.ssafy.a101.api.response;

import com.ssafy.a101.db.entity.Auto_set;
import lombok.Getter;

import java.sql.Time;
import java.util.Date;

@Getter
public class Auto_setResponse {

    private final Time time;
    private final Long set_temp;
    private final Long set_hum;
    private final Long set_uv;

    public Auto_setResponse(Auto_set auto_set){
        this.time = auto_set.getTime();
        this.set_temp = auto_set.getSet_temp();
        this.set_hum = auto_set.getSet_hum();
        this.set_uv = auto_set.getSet_uv();
    }
}
