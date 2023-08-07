package com.ssafy.a101.db.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Alarm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="arm_id" , updatable = false)
    private Long arm_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cage_id", referencedColumnName = "cage_id")
    private Cage cage_id;


    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "cycle", nullable = false)
    private Date cycle;

    @Column(name = "recent", nullable = false)
    private Date recent;

    @Builder
    public Alarm(String name, Date cycle, Date recent){
        this.name = name;
        this.cycle = cycle;
        this.recent = recent;
    }

    public void update(String name, Date cycle, Date recent){
        this.name = name;
        this.cycle = cycle;
        this.recent = recent;
    }

    public Alarm(){}



}
