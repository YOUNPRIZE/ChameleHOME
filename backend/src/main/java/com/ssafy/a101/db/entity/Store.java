package com.ssafy.a101.db.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access =AccessLevel.PROTECTED )

@Table(name = "store")

public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "store_id", updatable = false)
    // 스토어 아이디는 교유 번호를 받아와야한다.




}