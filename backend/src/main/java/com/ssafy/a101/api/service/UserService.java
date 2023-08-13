package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddUserRequest;
import com.ssafy.a101.api.request.UpdateUserRequest;
import com.ssafy.a101.db.entity.User;
import com.ssafy.a101.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.implementation.bind.MethodDelegationBinder;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public User save(AddUserRequest dto) {

//        return userRepository.save(User.builder()
//                        .userId(dto.toEntity().getUserId())
//                .email(dto.getEmail())
//                .password(dto.getPassword())
//                .build()).getId();save(request.toEntity());
            return userRepository.save(dto.toEntity());
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }

    @Transactional
    public User update(Long id, UpdateUserRequest request) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException());
        user.update(request.getPassword(), request.getNickname(), request.getNumber());
        return user;
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    // 이메일을 입력 받아 users 테이블에서 유저를 찾고, 없으면 예외를 발생
//    public User findByEmail(String email) {
//        return userRepository.findByEmail(email)
//                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
//    }
}