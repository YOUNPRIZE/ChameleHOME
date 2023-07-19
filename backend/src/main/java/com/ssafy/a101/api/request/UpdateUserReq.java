package com.ssafy.a101.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UpdateUserReq {
    private String user_id;
    private String password;
    private String nickname;
    private int number;
}
