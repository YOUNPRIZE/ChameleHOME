package com.ssafy.a101.api.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
public class AddUserRequest {
    private String userId;
    private String password;
    private String nickname;
    private Long number;
    private String user_img;
}