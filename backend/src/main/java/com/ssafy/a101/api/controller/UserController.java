package com.ssafy.a101.api.controller;

import com.ssafy.a101.api.request.AddUserRequest;
import com.ssafy.a101.api.request.LoginUserRequest;
import com.ssafy.a101.api.request.UpdateUserRequest;
import com.ssafy.a101.api.response.UserResponse;
import com.ssafy.a101.api.service.EmailService;
import com.ssafy.a101.api.service.UserService;
import com.ssafy.a101.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Email;

@RequiredArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final EmailService emailService;

    // 회원 가입
    @PostMapping("/join")
    public ResponseEntity<String> join(@RequestBody AddUserRequest request){
        userService.join(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(("회원 가입을 성공했습니다."));
    }

    @GetMapping("/join/{userId}")
    public ResponseEntity<Integer> check(@PathVariable String userId) {
        int response = userService.check(userId);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/join/email")
    public  ResponseEntity<String> email(@RequestParam String email) throws Exception {
        String code = emailService.sendSimpleMessage(email);
//        int number = emailService.sendMail(email);
//        String code = "" + number;
        return ResponseEntity.ok().body(code);

    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUserRequest request) {
        return ResponseEntity.ok().body(userService.login(request));
    }

    // 회원 정보 조회
    @GetMapping("/{userId}")
    public ResponseEntity<UserResponse> findUser(@PathVariable String userId){
        User user = userService.findByUserId(userId);
        return ResponseEntity.ok()
                .body(new UserResponse(user));
    }

    // 회원 가입
//    @PostMapping("/api/user")
//    public ResponseEntity<User> addUser(@RequestBody AddUserRequest request){
//        User savedUser = userService.save(request);
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .body((savedUser));
//    }

    // 회원 정보 수정
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody UpdateUserRequest request){
        User updateUser = userService.update(id, request);
        return ResponseEntity.ok().body(updateUser);
    }

    // 회원 탈퇴
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id){
        userService.delete(id);
        return ResponseEntity.ok().build();
    }
}