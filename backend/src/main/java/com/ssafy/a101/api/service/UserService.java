package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddUserRequest;
import com.ssafy.a101.api.request.UpdateUserRequest;
import com.ssafy.a101.db.entity.User;
import com.ssafy.a101.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public Long save(AddUserRequest dto) {

        return userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(dto.getPassword())
                .build()).getId();
    }

    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }
    // 이메일을 입력 받아 users 테이블에서 유저를 찾고, 없으면 예외를 발생
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }
}