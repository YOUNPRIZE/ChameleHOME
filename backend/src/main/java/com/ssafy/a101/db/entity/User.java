package com.ssafy.a101.db.entity;

import lombok.*;
import javax.persistence.*;


@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "user_id", updatable = false)
    private String user_id;

    @Column(name = "password", updatable = false)
    private String password;

    @Column(name = "nickname", updatable = false)
    private String nickname;

    @Column(name = "number", updatable = false)
    private Long number;

    @Builder
    public User(Long id, String user_id, String password, String nickname, Long  number){
        this.id = id;
        this.user_id = user_id;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
    }

    public void update(String user_id, String password, String nickname, Long  number){
        this.user_id = user_id;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
    }


        // 기본 생성자 정의
    public User() {
    }

}
