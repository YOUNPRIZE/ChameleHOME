package com.ssafy.a101.api.response;


import com.ssafy.a101.db.entity.Animal;
import lombok.Getter;

import java.util.Date;

@Getter
public class AnimalResponse {

    private final String name;
    private final String gender;
    private final Date birth;
    private final String issue;
    private final Date created_at;
    private final String photo;


    public AnimalResponse(Animal animal){
        this.name = animal.getName();
        this.gender = animal.getGender();
        this.birth = animal.getBirth();
        this.issue = animal.getIssue();
        this.created_at =  animal.getCreated_at();
        this.photo =  animal.getPhoto();

    }
}
