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


    private  final UserRepository userRepository;

    // 회원 가입 하기
    public User save(AddUserRequest request){return userRepository.save(request.toEntity());}


    // 회원 정보 조회
    public User findById(Long id){
        return userRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("없는 데용" + id));
    }


    // 회원 탈퇴
    public void delete(Long user_id){userRepository.deleteById(user_id);}


    // 정보 수정
    @Transactional
    public User update(long user_id, UpdateUserRequest request){
        User user = userRepository.findById(user_id)
                .orElseThrow(()-> new IllegalArgumentException(("없뎃안되는데용") + user_id));
        user.update(request.getUser_id(), request.getPassword(), request.getNickname(), request.getNumber());
        return user;
    }

}
