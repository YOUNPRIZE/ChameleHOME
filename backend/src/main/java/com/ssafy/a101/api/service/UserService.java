package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.CreateUserReq;
import com.ssafy.a101.api.request.UpdateUserReq;
import com.ssafy.a101.db.entity.User;
import com.ssafy.a101.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor // final이 붙거나 @NotNull이 붙은 필드의 생성자 추가
@Service
public class UserService {
    private final UserRepository ur;

    // 사용자 조회 메서드
    public User selectById(long id) {
        return ur.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

    }

    // 사용자 추가 메서드
    public User create(CreateUserReq req) {
        System.out.println(req);
        System.out.println("Asdfasdfsadf");
        return ur.save(req.toEntity());
    }

    // 사용자 수정 메서드
    @Transactional
    public User update(long id, UpdateUserReq req) {
        User user = ur.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

        user.update(req.getUser_id(), req.getPassword(), req.getNickname(), req.getNumber());

        return user;
    }

    // 사용자 삭제 메서드
    public void delete(long id) {ur.deleteById(id);}
}
