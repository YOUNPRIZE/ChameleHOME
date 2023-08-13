package com.ssafy.a101.api.response;

import com.ssafy.a101.db.entity.User;
import lombok.Getter;

@Getter
public class UserResponse {
    private final Long id;
    private final String userId;
//    private final String email;
    private final String password;

    private final String nickname;
    private final Long number;
//    private final Long number;
//    private final String user_img;

    public UserResponse(User user){
        this.id = user.getId();
        this.userId = user.getUserId();
        this.password = user.getPassword();
        this.nickname = user.getNickname();
        this.number = user.getNumber();
//        this.user_img = user.getUser_img();
    }
}
