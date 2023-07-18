package com.ssafy.a101.api.service;

import com.ssafy.a101.api.request.UpdateArticleRequest;
import com.ssafy.a101.db.entity.Article;
import com.ssafy.a101.db.repository.BlogRepository;
import com.ssafy.a101.api.request.AddArticleRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor // final이 붙거나 @NotNull이 붙은 필드의 생성자 추가
@Service // 빈으로 등록
public class BlogService {
    private final BlogRepository br;

    // 블로그 글 추가 메서드
    public Article save(AddArticleRequest request) {
        return br.save(request.toEntity());
    }

    public List<Article> findAll() {
        return br.findAll();
    }

    public Article findById(long id) {
        return br.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));
    }

    public void delete(long id) {
        br.deleteById(id);
    }

    @Transactional
    public Article update(long id, UpdateArticleRequest request) {
        Article article = br.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

        article.update(request.getTitle(), request.getContent());

        return article;
    }
}
