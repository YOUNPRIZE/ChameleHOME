package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.Article;
import com.ssafy.a101.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
