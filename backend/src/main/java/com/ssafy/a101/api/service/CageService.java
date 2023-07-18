package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddCageReq;
import com.ssafy.a101.db.entity.Cage;
import com.ssafy.a101.db.repository.CageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class CageService {
    private final CageRepository cr;

    // 케이지 추가 메서드
    public Cage addCage(AddCageReq req) {
        return cr.save(req.toEntity());
    }

    public List<Cage> searchAll() {
        return cr.findAll();
    }
}
