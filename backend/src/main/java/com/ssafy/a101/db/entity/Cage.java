package com.ssafy.a101.db.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Cage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cage_id", updatable = false)
    // 시리얼 번호
    private Long cage_id;

    // User의 id도 추가해야됨 근데 엮여있는건 어떻게?

    @Column(name = "cage_name", nullable = false)
    private String cage_name;

    @Column(name = "alarm", nullable = true)
    private Date alarm;

    @Column(name = "set_temp", nullable = false)
    private int set_temp;

    @Column(name = "set_hum", nullable = false)
    private int set_hum;

    @Column(name = "set_uv", nullable = true)
    private int set_uv;

    @Column(name = "using", nullable = true)
    private boolean using;

    @Builder
    public Cage(String cage_name, Date alarm, int set_temp, int set_hum, int set_uv, boolean using) {
        this.cage_name = cage_name;
        this.alarm = alarm;
        this.set_temp = set_temp;
        this.set_hum =  set_hum;
        this.set_uv = set_uv;
        this.using = using;
    }

    public void update(String cage_name, Date alarm, int set_temp, int set_hum, int set_uv, boolean using) {
        this.cage_name = cage_name;
        this.alarm = alarm;
        this.set_temp = set_temp;
        this.set_hum =  set_hum;
        this.set_uv = set_uv;
        this.using = using;
    }
}
