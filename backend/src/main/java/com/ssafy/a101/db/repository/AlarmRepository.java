package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.Alarm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmRepository extends JpaRepository<Alarm, Long> {
}
