package com.ssafy.a101.db.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

//    @Column(name = "userId", updatable = false, unique = true)
//    private String userId;

    @Column(name = "email", updatable = false)
    private String email;

    @Column(name = "password", updatable = true)
    private String password;

    @Column(name = "nickname", updatable = true)
    private String nickname;

//    @Column(name = "number", updatable = true)
//    private Long number;

//    @Column(name = "user_img", updatable = true)
//    private String user_img;

    @Builder
    public User(String email, String password, String nickname) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }

//    public void update(String userId, String password, String nickname, Long number, String user_img){
//        this.userId = userId;
//        this.password = password;
//        this.nickname = nickname;
//        this.number = number;
//        this.user_img = user_img;
//    }
public User update(String nickname){
    this.nickname = nickname;
    return this;
}
}