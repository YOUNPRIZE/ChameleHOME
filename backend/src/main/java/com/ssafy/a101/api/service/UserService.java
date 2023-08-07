package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddUserRequest;
import com.ssafy.a101.api.request.UpdateUserRequest;
import com.ssafy.a101.db.entity.User;
import com.ssafy.a101.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    //private final BCryptPasswordEncoder bCryptPasswordEncoder;

    // 회원 가입
//    public Long save(AddUserRequest dto) {
//        return userRepository.save(User.builder()
//                .userId(dto.getUserId())
//                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
//                .nickname(dto.getNickname())
//                .number(dto.getNumber())
//                .user_img(dto.getUser_img())
//                .build()).getId();
//    }

    // 회원 정보 조회
    public User findById(Long user_id) {
        return userRepository.findById(user_id)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user : " + user_id));
    }

    // 회원 탈퇴
    public void delete(Long id){
        userRepository.deleteById(id);
    }

    // 정보 수정
    @Transactional
    public User update(long user_id, UpdateUserRequest request){
        User user = userRepository.findById(user_id)
                .orElseThrow(()-> new IllegalArgumentException(("없뎃안되는데용") + user_id));
        user.update(request.getUser_id(), request.getPassword(), request.getNickname(), request.getNumber(), request.getUser_img());
        return user;
    }
}