package com.ssafy.a101.db.repository;

import com.ssafy.a101.db.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByUserId(Long user_id);
    Optional<RefreshToken> findByRefreshToken(String refreshToken);
}
