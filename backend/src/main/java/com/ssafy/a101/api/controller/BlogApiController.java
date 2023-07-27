package com.ssafy.a101.api.controller;

import com.ssafy.a101.api.request.AddAriticleRequest;
import com.ssafy.a101.api.response.ArticleResponse;
import com.ssafy.a101.api.service.BlogService;
import com.ssafy.a101.db.entity.Article;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController // http response blog  에 객체 데이터를 json  형식으로 반환하는 컨트롤러
public class BlogApiController {

    private final BlogService blogService;

    //Http 메서드가 post 일때 전달받은 url과 동일하면 메서드로 매핑
    @PostMapping("/api/articles")
    //요청 본문 값 매핑
    public ResponseEntity<Article> addArticle(@RequestBody AddAriticleRequest request){
        Article savedArticle = blogService.save(request);
        //요청한 자원이 성공적으로 생성되었으며 저장된 블로그 글 정보를 응답객체에 담아 전송
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedArticle);
    }

    @GetMapping("/api/articles")
    public ResponseEntity<List<ArticleResponse>> findAllArticles(){
        List<ArticleResponse> articles = blogService.findALL()
                .stream()
                .map(ArticleResponse::new)
                //.toList()  .//자바 16 이상 사용가능
                .collect(Collectors.toList()); // 위랑 같은 기능

        return ResponseEntity.ok()
                .body(articles);
    }

}
