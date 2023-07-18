package com.ssafy.a101.db.entity;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Entity
// lombok의 Annotation을 사용해 Getter, Setter를 작성
@Getter
//@Setter
// 접근제어자가 public인 기본 생성자를 별도의 코드 없이 생성
@NoArgsConstructor(access = AccessLevel.PUBLIC)
//@ApiModel(value = "UserDto : 사용자 정보", description = "사용자의 정보를 나타낸다.")
public class User {
    @Id
    // 기본키 자동으로 1씩 증가, AUTO_INCREMENT 같은 느낌
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // 엔티티 수정 시 이 필드도 같이 수정한다. false로 설정하면 db에 수정하지 않는다. false 옵션은 읽기 전용일 때 사용한다.
    @Column(name = "id", updatable = false)
//    @ApiModelProperty(value = "사용자 고유번호")
    private Long id;

    // "user_id"라는 not null 칼럼과 매핑
    @Column(name = "user_id", nullable = false)
//    @ApiModelProperty(value = "사용자의 아이디")
    private String user_id;

    @Column(name = "password", nullable = false)
//    @ApiModelProperty(value = "사용자의 비밀번호")
    private String password;

    @Column(name = "nickname", nullable = false)
//    @ApiModelProperty(value = "사용자의 별명")
    private String nickname;

    @Column(name = "number", nullable = false)
//    @ApiModelProperty(value = "사용자의 전화번호")
    private int number;

    // 빌더 패턴으로 객체 생성
    // 빌더 패턴을 사용하지 않았을 때
    // -> new User("ssafy", "1234", "김싸피", 01033333333);

    // 빌더 패턴을 사용했을 때
    //    User.builder()
    //        .user_id("ssafy")
    //        .password("1234")
    //        .nickname("김싸피")
    //        .number(01033333333);

    // 빌더 패턴을 사용하면 어느 필드에 어떤 값이 들어가는지 명시적으로 파악하기 쉬움.
    @Builder
    public User(String user_id, String password, String nickname, int number) {
        this.user_id = user_id;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
    }

//    // 기본 생성자
//    public User() {}
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(String user_id) {
//        this.user_id = user_id;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getNickname() {
//        return nickname;
//    }
//
//    public void setNickname(String nickname) {
//        this.nickname = nickname;
//    }
//
//    public int getNumber() {
//        return number;
//    }
//
//    public void setNumber(int number) {
//        this.number = number;
//    }
}
