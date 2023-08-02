package com.ssafy.a101.api.request;


import com.ssafy.a101.db.entity.Cage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddCageRequest {

    private Long cage_id;
    private Long id;
    private String cage_name;
    private Long set_temp;
    private Long set_hum;
    private Long set_uv;
    private Date created_at;
    private String category;


    public Cage toEntity(){
        return Cage.builder()
                .cage_id(cage_id)
                .id(id)
                .cage_name(cage_name)
                .set_temp(set_temp)
                .set_hum(set_hum)
                .set_uv(set_uv)
                .created_at(created_at)
                .category(category)
                .build();
    }

}
