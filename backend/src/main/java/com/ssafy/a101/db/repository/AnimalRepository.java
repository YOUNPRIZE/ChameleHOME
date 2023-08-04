package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
}
