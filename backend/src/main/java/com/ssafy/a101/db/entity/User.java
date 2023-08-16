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

    @Column(name = "user_id", updatable = false)
    private String userId;

//    @Column(name = "email", updatable = false)
//    private String email;

    @Column(name = "password", updatable = true)
    private String password;

    @Column(name = "nickname", updatable = true)
    private String nickname;

    @Column(name = "email", updatable = true)
    private String email;

//    @Column(name = "user_img", updatable = true)
//    private String user_img;

//    @Builder
//    public User(String email, String password, String nickname) {
//        this.email = email;
//        this.password = password;
//        this.nickname = nickname;
//    }

    @Builder
    public User(String userId, String password, String nickname, String email) {
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
    }
    public void update(String password, String nickname){
//        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
//        this.email = email;
    }
//    public User update(String nickname){
//        this.nickname = nickname;
//        return this;
//    }
}