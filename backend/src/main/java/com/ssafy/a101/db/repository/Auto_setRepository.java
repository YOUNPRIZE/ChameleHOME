package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.Auto_set;
import com.ssafy.a101.db.entity.Cage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Auto_setRepository extends JpaRepository<Auto_set, Long> {

    List<Auto_set> findByCageId_CageId(Long cage_id);

}
