package com.ssafy.a101.api.request;

import com.ssafy.a101.db.entity.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddArticleRequest {
    private String title;
    private String content;

    // toEntity는 빌더 패턴을 사용해 DTO를 엔티티로 만들어주는 메서드이다.
    // 해당 메서드는 추후에 글을 추가할 때 저장할 엔티티로 변환하는 용도로 사용함
    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .build();
    }
}
