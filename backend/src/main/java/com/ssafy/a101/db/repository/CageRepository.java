package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.Cage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CageRepository extends JpaRepository<Cage, Long> {
}
