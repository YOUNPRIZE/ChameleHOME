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
@CrossOrigin("*")
public class UserController {
    private final UserService userService;

//    @PostMapping("/user")
//    public String signup(AddUserRequest request) {
//        userService.save(request);
//        return "redirect:/login";
//    }

    // 회원 정보 조회
    @GetMapping("/api/user/{id}")
    public ResponseEntity<UserResponse> findUser(@PathVariable long id){
        User user = userService.findById(id);
        return ResponseEntity.ok()
                .body(new UserResponse(user));
    }

    // 회원 가입
    @PostMapping("/api/signup")
    public ResponseEntity<Long> addUser(@RequestBody AddUserRequest request){
        Long savedUser = userService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body((savedUser));
    }

    // 회원 정보 수정
//    @PutMapping("/api/user/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody UpdateUserRequest request){
//        User updateUser = userService.update(id, request);
//        return ResponseEntity.ok().body(updateUser);
//    }

    // 회원 탈퇴
//    @DeleteMapping("/api/user/{id}")
//    public ResponseEntity<Void> deleteUser(@PathVariable long id){
//        userService.delete(id);
//        return ResponseEntity.ok().build();
//    }

//    @GetMapping("/logout")
//    public String logout(HttpServletRequest request, HttpServletResponse response) {
//        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
//        return "redirect:/login";
//    }
}