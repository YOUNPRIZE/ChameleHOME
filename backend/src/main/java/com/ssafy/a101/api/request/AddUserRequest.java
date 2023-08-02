package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddUserRequest {
    private  Long id;
    private String user_id;
    private  String password;
    private String nickname;
    private Long number;


    public User toEntity(){
        return User.builder()
                .id(id)
                .user_id(user_id)
                .password(password)
                .nickname(nickname)
                .number(number)
                .build();
    }

}
