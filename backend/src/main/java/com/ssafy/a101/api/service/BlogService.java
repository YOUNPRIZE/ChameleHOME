package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.AddAriticleRequest;
import com.ssafy.a101.api.request.UpdateArticleRequest;
import com.ssafy.a101.db.entity.Article;
import com.ssafy.a101.db.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor // final  이 붙거나 @notnull  이 붙은 필드 생성자 추가
@Service //빈으로 등록
public class BlogService {

    private final BlogRepository blogRepository;

    //블로그 글 추가 메서드
    public Article save(AddAriticleRequest request){
        return blogRepository.save(request.toEntity());
    }

    // 전체 조회
    public List<Article> findALL(){
        return blogRepository.findAll();
    }

    // 특정 값 조회
    public Article findById(Long id){
        return blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));
        // 아이디 값이 없으면 예외 처리르 해주는 코드다.W
    }

    //지우기
    public void delete(long id){
        blogRepository.deleteById(id);
    }

    //업데이트, 글 수정 메서드
    @Transactional
    public Article update(long id, UpdateArticleRequest request){
        Article article = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found 업데이트: " + id));

        article.update(request.getTitle(), request.getContent());
        return article;
    }

}
