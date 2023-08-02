package com.ssafy.a101.db.entity;
import lombok.*;
import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Cage {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cage_id", updatable = false)
    private Long cage_id;

    @Column(name = "id", updatable = false)
    private  Long id;

    @Column(name = "cage_name", updatable = false)
    private  String cage_name;

    @Column(name = "set_temp", updatable = false)
    private  Long set_temp;

    @Column(name = "set_hum", updatable = false)
    private  Long set_hum;

    @Column(name = "set_uv", updatable = false)
    private  Long set_uv;

    @Column(name = "created_at", updatable = false)
    private Date created_at;

    @Column(name = "category", updatable = false)
    private  String category;


    @Builder
    public Cage(Long cage_id, Long id, String cage_name,  Long set_temp,  Long set_hum, Long set_uv,  Date created_at, String category){
        this.id=id;
        this.cage_name = cage_name;
        this.cage_id = cage_id;
        this.set_hum = set_hum;
        this.set_uv = set_uv;
        this.created_at = created_at;
        this.category = category;
    }

    public void update(Long cage_id, Long id, String cage_name,  Long set_temp,  Long set_hum, Long set_uv,  Date created_at, String category){
        this.id=id;
        this.cage_name = cage_name;
        this.cage_id = cage_id;
        this.set_hum = set_hum;
        this.set_uv = set_uv;
        this.created_at = created_at;
        this.category = category;
    }

    public Cage() {}

}
