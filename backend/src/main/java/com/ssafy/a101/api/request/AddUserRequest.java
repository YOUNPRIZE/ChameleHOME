package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class AddUserRequest {

    private String email;
    private String password;
    private String nickname;

    public User toEntity() {
        return User.builder()
                .email(getEmail())
                .password(getPassword())
                .nickname(getNickname())
                .build();
    }
}