package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddAriticleRequest;
import com.ssafy.a101.db.entity.Article;
import com.ssafy.a101.db.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor // final  이 붙거나 @notnull  이 붙은 필드 생성자 추가
@Service //빈으로 등록
public class BlogService {

    private final BlogRepository blogRepository;

    //블로그 글 추가 메서드
    public Article save(AddAriticleRequest request){
        return blogRepository.save(request.toEntity());
    }

    public List<Article> findALL(){
        return blogRepository.findAll();
    }
}
