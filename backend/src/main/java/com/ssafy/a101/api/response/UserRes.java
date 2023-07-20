package com.ssafy.a101.api.response;

import com.ssafy.a101.db.entity.User;
import lombok.Getter;

@Getter
public class UserRes {
    private final String user_id;
    private final String password;
    private final String nickname;
    private final int number;

    public UserRes(User user) {
        this.user_id = user.getUser_id();
        this.password = user.getPassword();
        this.nickname = user.getNickname();
        this.number = user.getNumber();
    }
}
