package com.ssafy.a101.api.controller;


import com.ssafy.a101.api.request.AddUserRequest;
import com.ssafy.a101.api.request.UpdateUserRequest;
import com.ssafy.a101.api.response.UserResponse;
import com.ssafy.a101.api.service.UserService;
import com.ssafy.a101.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;


    // 회원가입 하기
    @PostMapping("/api/user")
    public ResponseEntity<User> addUser(@RequestBody AddUserRequest request){
        User savedUser = userService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body((savedUser));
    }

    // 회원 정보 조회
    @GetMapping("/api/user/{id}")
    public ResponseEntity<UserResponse> findUser(@PathVariable long id){
        User user = userService.findById(id);

        return ResponseEntity.ok()
                .body(new UserResponse(user));
    }


    //회원탈퇴
    @DeleteMapping("/api/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id){
        userService.delete(id);

        return ResponseEntity.ok()
                .build();
    }



    // 회원 정보 수정
    @PutMapping("/api/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id,
                                           @RequestBody UpdateUserRequest request){
        User updateUser = userService.update(id, request);

        return ResponseEntity.ok()
                .body(updateUser);
    }



}