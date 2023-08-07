package com.ssafy.a101.api.response;

import com.ssafy.a101.db.entity.Alarm;
import lombok.Getter;

import java.util.Date;

@Getter
public class AlarmResponse {

    private final String name;
    private final Date cycle;
    private final Date recent;


    public AlarmResponse(Alarm alarm){
        this.name = alarm.getName();
        this.cycle = alarm.getCycle();
        this.recent = alarm.getRecent();
    }

}
