package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CreateUserReq {
    private String user_id;
    private String password;
    private String nickname;
    private int number;

    // toEntity는 빌더 패턴을 사용해 DTO를 엔티티로 만들어주는 메서드이다.
    // 해당 메서드는 추후에 사용자를 추가할 때 저장할 엔티티로 변환하는 용도로 사용함
    public User toEntity() {
        return User.builder()
                .user_id(user_id)
                .password(password)
                .nickname(nickname)
                .number(number)
                .build();
    }
}
