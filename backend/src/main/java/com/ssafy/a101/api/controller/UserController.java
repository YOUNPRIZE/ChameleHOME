package com.ssafy.a101.api.controller;

import com.ssafy.a101.api.request.CreateUserReq;
import com.ssafy.a101.api.request.UpdateUserReq;
import com.ssafy.a101.api.response.UserRes;
import com.ssafy.a101.api.service.UserService;
import com.ssafy.a101.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController // HTTP Response Body에 객체 데이터를 JSON 형식으로 반환하는 컨트롤러
public class UserController {
    private final UserService us;

    @GetMapping("/api/user/{id}")
    public ResponseEntity<UserRes> getUser(@PathVariable long id) {
        User user = us.selectById(id);

        return ResponseEntity.ok().body(new UserRes(user));
    }

    @PostMapping("/api/user")
    public ResponseEntity<User> createUser(@RequestBody CreateUserReq req) {
        System.out.println("asdfasdfasdfasdfasdf");
        System.out.println(req);
        User createdUser = us.create(req);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @PutMapping("/api/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody UpdateUserReq req) {
        User updatedUser = us.update(id, req);

        return ResponseEntity.ok().body(updatedUser);
    }

    @DeleteMapping("/api/user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {
        us.delete(id);

        return ResponseEntity.ok().build();
    }
}
