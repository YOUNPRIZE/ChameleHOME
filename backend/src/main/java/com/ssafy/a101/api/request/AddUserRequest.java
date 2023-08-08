package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class AddUserRequest {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private String userId;
    private String password;
    private String nickname;
    private Long number;
    private String user_img;

    public User toEntity() {
        return User.builder()
                .userId(getUserId())
                .password(bCryptPasswordEncoder.encode(getPassword()))
                .nickname(getNickname())
                .number(getNumber())
                .user_img(getUser_img())
                .build();
    }
}