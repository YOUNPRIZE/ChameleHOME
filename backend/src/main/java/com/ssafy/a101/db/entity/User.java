package com.ssafy.a101.db.entity;

//import io.swagger.annotations.ApiModel;
//import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;

@Entity // Database 테이블과 매핑될 클래스를 엔티티로 지정
@Getter // Getter를 작성해주는 lombok의 Annotation
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 접근제어자가 PROTECTED인 기본 생성자를 생성하는 Annotation
//@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자
//@RequiredArgsConstructor // final이나 @NonNull인 필드 값만 파라미터로 받는 생성자
//@ApiModel(value = "UserDto : 사용자 정보", description = "사용자의 정보를 나타낸다.")
@Table(name="MEMBER") // 처음에 Table 명을 USER 그대로 하니까 SQL 오류가 계속 발생하였음.
public class User {
    // @Id가 적용된 맴버변수는 실제 매핑될 테이블의 식별자 값인 PK를 의미한다.
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

    @Column(name = "phone", nullable = false)
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

    public void update(String user_id, String password, String nickname, int number) {
        this.user_id = user_id;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
    }
}
