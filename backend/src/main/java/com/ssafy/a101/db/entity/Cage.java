package com.ssafy.a101.db.entity;
import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "cage")
public class Cage {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cage_id", updatable = false)
    private Long cageId;

    // fk 사용해야한다.
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", referencedColumnName = "id")
    private  User id;

    @Column(name = "cage_name", updatable = false)
    private  String cage_name;

    @Column(name = "set_temp", updatable = false)
    private  Long set_temp;

    @Column(name = "set_hum", updatable = false)
    private  Long set_hum;

    @Column(name = "set_uv", updatable = true)
    private  Long set_uv;

    @Column(name = "created_at", updatable = true)
    private Date created_at;

    @Column(name = "category", updatable = true)
    private  String category;


    @Builder
    public Cage(Long cageId, String cage_name,  Long set_temp,  Long set_hum, Long set_uv,  Date created_at, String category){
        this.cageId = cageId;
        this.cage_name = cage_name;
        this.set_hum = set_hum;
        this.set_temp = set_temp;
        this.set_uv = set_uv;
        this.created_at = created_at;
        this.category = category;
    }

    public void update(String cage_name, Long set_temp, Long set_hum, Long set_uv, Date created_at, String category){
        this.cage_name = cage_name;
        this.set_temp = set_temp;
        this.set_hum = set_hum;
        this.set_uv = set_uv;
        this.created_at = created_at;
        this.category = category;
    }

    public Cage() {}

}
