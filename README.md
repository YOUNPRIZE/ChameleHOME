# 공통프로젝트

# 🦎 파충류치원(가제)

## **0. 프로젝트 개요**

🎈 프로젝트명 : 

📌 프로젝트 컨셉 :

🛠 개발 기간 : 23.07.10 ~ 23.08.18 (6주)

🧑🏻 팀원 : 인정환, 김민태, 김한주, 문형준, 손세이, 조윤상

💻 사용 기술스택 : SpringBoot, React, AWS + (시스템 아키텍처 참고)

## **1. 팀원 정보 및 업무 분담 내역**

| 이름 | 역할 | 설명 |
| --- | --- | --- |
| 인정환 | IoT | 팀장, IoT 개발 |
| 김민태 | Backend | 부팀장, Figma 제작, JPA 구현 |
| 김한주 | Frontend | Frontend 구현 |
| 손세이 | IoT | IoT 개발 |
| 조윤상 | Backend | SpringBoot REST API 설계 및 서버 구현 |

## 2**. 서비스 대표 기능**

- 웹
    
    
    | 기능 | 세부기능 |  |
    | --- | --- | --- |
    | 회원기능 | 1. 회원가입(개인정보 + 키우고 있는 파충류 정보 + 보유하고 있는 케이지 등록)
    (회원가입 시 전화번호 인증 기능 추가)
    2. 로그인
    3. 로그아웃
    마이페이지 (4,5,6)
    4. 회원정보 변경
    5. 비밀번호 변경
    6. 회원탈퇴
    7. 개인 쪽지함 |  |
    | 프로필 | 1. 사용자 정보 조회
    2. 사용자가 키우는 파충류 정보 조회 |  |
    | 케이지 상태 조회 | 1. 케이지 온도 표시
    2. 케이지 습도 표시
    3. 케이지 UV 등 환경 설정 표시
    4. 실시간 영상 송출
    5. 카메라 위치 조정
    6. 영상 캡쳐 후 사진 저장 |  |
    | 케이지 상태 조절 | 1. 케이지 온도 조절
    2. 케이지 습도 조절
    3. 케이지 UV 등 환경 조절 |  |
    | 파충류별 정보 등록 | 1. 거북이, 악어, 뱀, 도마뱀, 카멜레온 등 동물의 종류를 등록하는 기능
    
    2. 종류별 가이드라인 제공(도감 & 제공) |  |
    | 먹이 주기 알림 | 1. 먹이를 제공 해야할 때 푸시 알림을 통해 알림 // 구현하기 힘들 시, 문자 알림 서비스
    2. 먹이 주기 입력
    3. 먹이 제공시 표시 후 주기 초기화 |  |
    | 물품 판매처 제공 | 1. 이익 발생을 위한 판매처 연결 |  |
    |  |  |  |
    | 커뮤니티 기능 | 1. 파충류 종류별 게시판 - 종류별 자랑
    2. 종류별 - 정보, 노하우 공유
    3. 번식 상대 찾기(파사모 참고, 자동매칭은 보류)
    4. 육성(사육)일지 |  |
- 디스플레이
    
    
    | 기능 | 세부기능 |
    | --- | --- |
    | 케이지 연동 | 부착된 케이스와 연동 |
    | 케이지 상태 표시 | 현재 케이지 온도 DB에서 가져와 표시
    
    현재 케이지 온도 DB에서 가져와 습도 표시
    
    현재 케이지 UV On/Off DB에서 가져와 표시 |
    | 케이지 상태 조절 | 케이지 온도 변경해서 DB에 전송
    케이지 습도 변경해서 DB에 전송
    케이지 UV 등 On/Off 변경해서 DB에 전송 |
- IoT
    
    
    | 기능 | 세부 기능 |
    | --- | --- |
    | 온습도 센싱 | DHT 센서로 온습도를 측정해서 mqtt 통신을 통해 서버로 값 전달 |
    | 영상 송출 | 파이 카메라로 영상을 찍어서 라이브 스트리밍 |
    | 조명 유지 | LED, 온열패드로 조명 유지하기 |
    | 온도 유지 | 팬과 온열 패드로 온도 유지 |
    | 습도 유지 | 가습기 모듈을 이용하여 습도 조절
    팬을 이용하여 습도 조절 |
    | 폭포 | 워터 펌프 모터를 활용하여 흐르는 폭포 구현 |
    | H/W | 프레임 만들기 |
    | 추가 기능 | 파충류 detect해서 카메라 자동 무빙 |
    |  | 조작(온열패드, 쿨링팬, 가습기 모듈) → qt or node-red |
    |  | 고장 여부 알림 |
    

## 3. 서비스 화면

## 4. 시스템  아키텍처 및 개발 환경

![archi]([https://github.com/YOUNPRIZE/YOUNPRIZE/assets/76830587/9167df7b-c1d7-42dd-9f2a-d016f4c5622c](https://github.com/YOUNPRIZE/YOUNPRIZE/assets/76830587/9167df7b-c1d7-42dd-9f2a-d016f4c5622c))

## 5. 컴포넌트 구조 및 프로토타입

📱 FrontEnd

```
📄 .gitignore
📄 babel.config.js
📄 jsconfig.json
📄 package-lock.json
📄 package.json
📄 README.md
📄 vue.config.js
📂 node_modules
📂 public
    ㄴ📄 favicon.ico
    ㄴ📄 index.html
📂 src
    ㄴ📄 App.vue
    ㄴ📄 main.js
    ㄴ📂 assets
    ㄴ📂 components
        ㄴ📄 HomeContent.vue
        ㄴ📂 cals
        ㄴ📄 CalCreate.vue
        ㄴ📄 CalDetail.vue
        ㄴ📄 CalDietCreate.vue
        ㄴ📄 CalDietDetail.vue
        ㄴ📄 CalList.vue
    ㄴ📂 common
        ㄴ📄 AsideNav.vue
    ㄴ📂 posts
        ㄴ📄 PostsCreate.vue
        ㄴ📄 PostsDetail.vue
        ㄴ📄 PostsList.vue
    ㄴ📂 users
        ㄴ📄 UsersInfo.vue
        ㄴ📄 UsersLogin.vue
        ㄴ📄 UsersModify.vue
        ㄴ📄 UsersRegister.vue
        ㄴ📄 UsersSearch.vue
    ㄴ📂 router
        ㄴ📄 index.js
    ㄴ📂 store
        ㄴ📄 store.js
    ㄴ📂 modules
        ㄴ📄 commentModule.js
        ㄴ📄 dietModule.js
        ㄴ📄 followModule.js
        ㄴ📄 nightmodeModule.js
        ㄴ📄 postModule.js
        ㄴ📄 routineModule.js
        ㄴ📄 userModule.js
    ㄴ📂 util
        ㄴ📄 http-common.js
    ㄴ📂 views
        ㄴ📄 CalView.vue
    ㄴ📄 HomeView.vue
    ㄴ📄 PostsView.vue
    ㄴ📄 UserView.vue
```

💾 BackEnd

```
📂 src/main/java
    ㄴ📦 com.griter
        ㄴ📄 GriterApiApplication.java
    ㄴ📦 com.griter.config
        ㄴ📄 DBConfig.java
        ㄴ📄 SwaggerConfig.java
        ㄴ📄 WebConfing.java
    ㄴ📦 com.griter.controller
        ㄴ📄 CommentLikeRestController.java
        ㄴ📄 CommentRestController.java
        ㄴ📄 DietRestController.java
        ㄴ📄 FollowRestController.java
        ㄴ📄 ImageRestController.java
        ㄴ📄 PostLikeRestController.java
        ㄴ📄 PostRestController.java
            ㄴ📄 RoutineRestController.java
        ㄴ📄 UserRestController.java
    ㄴ📦 com.griter.exception
        ㄴ📄 PostNotFoundException.java
    ㄴ📦 com.griter.interceptor
        ㄴ📄 JwtInterceptor.java
    ㄴ📦 com.griter.model.dao
            ㄴ📄 CommentDao.java
        ㄴ📄 CommentLikeDao.java
        ㄴ📄 DietDao.java
        ㄴ📄 FollowDao.java
        ㄴ📄 ImageDao.java
        ㄴ📄 PostDao.java
        ㄴ📄 PostLikeDao.java
        ㄴ📄 RoutineLikeDao.java
        ㄴ📄 UserDao.java
        ㄴ📦 com.griter.model.dto
        ㄴ📄 Comment.java
        ㄴ📄 CommentLike.java
        ㄴ📄 Diet.java
        ㄴ📄 Follow.java
        ㄴ📄 Image.java
        ㄴ📄 Post.java
        ㄴ📄 PostLike.java
        ㄴ📄 Routine.java
        ㄴ📄 User.java
        ㄴ📦 com.griter.model.service
        ㄴ📄 CommentLikeService.java
        ㄴ📄 CommentLikeServiceImpl.java
        ㄴ📄 CommentService.java
        ㄴ📄 CommentServiceImpl.java
        ㄴ📄 DietService.java
        ㄴ📄 DietServiceImpl.java
        ㄴ📄 FollowService.java
        ㄴ📄 FollowServiceImpl.java
        ㄴ📄 ImageService.java
        ㄴ📄 ImageServiceImpl.java
        ㄴ📄 PostLikeService.java
        ㄴ📄 PostLikeServiceImpl.java
        ㄴ📄 PostService.java
        ㄴ📄 PostServiceImpl.java
        ㄴ📄 RoutineService.java
        ㄴ📄 RoutineServiceImpl.java
        ㄴ📄 UserService.java
        ㄴ📄 UserServiceImpl.java
📂 src/main/resources
    ㄴ📂 mappers
        ㄴ📄 Comment.xml
        ㄴ📄 CommentLike.xml
        ㄴ📄 Diet.xml
        ㄴ📄 Follow.xml
        ㄴ📄 Image.xml
        ㄴ📄 Post.xml
        ㄴ📄 PostLike.xml
        ㄴ📄 Routine.xml
        ㄴ📄 User.xml
    ㄴ📄 application.properties
    ㄴ📄 schema.sql
📄 pom.xml
```

⛏ IoT

## 6. 데이터베이스 모델링 (ERD)

![ERD]([https://github.com/YOUNPRIZE/YOUNPRIZE/assets/76830587/78e3aa97-4b50-40a6-880d-35ff73dc7cbf](https://github.com/YOUNPRIZE/YOUNPRIZE/assets/76830587/78e3aa97-4b50-40a6-880d-35ff73dc7cbf))

## 7. Convention

### Commit Convention

> [type]
> 
> 
> commit message
> 
- Type
    - **Fix** : 잘못된 동작을 고칠 때
        
        > fix function/error/typo in style.css
        > 
    - option
        - funtion : 고친 함수 명 (e.g. fix login function in index.html)
        - error : 수정한 에러 (e.g. fix [구체적 에러명] error in login.js)
        - typo : 오타 (e.g. fix typo in style.css)
    - **add** : 새로운 것을 추가할 때
        
        > add mytest.test for test (새로운 파일 추가 시)
        > 
        
        > add blue color to style.css (기존 파일에 내용 추가 시)
        > 
    - **move** : 코드나 파일을 이동할 때
        
        > move A to B (e.g. A를 B로 이동할 때)
        > 
    - **rename** : 이름 변경이 있을 때
        
        > rename A to B (e.g. A를 B로 이름을 변경할 때)
        > 
    - **update** : 정상적으로 동작하는 파일을 보완하는 경우
        
        > update test.js to use HTTPS (test.js에 기존의 프로토콜에서 HTTPS 프로토콜 사용으로 변경)
        > 
    - **remove** : 삭제가 있을 때
        
        > remove test.js (파일 삭제 시)
        > 
        
        > remove black color from style.css (파일 내 부분 삭제 시)
        > 
- commit message: 변경 사항에 대해 명확하게 기술

### Code Convention

- JavaScript
- Java
- IoT

## 8. Git Flow

```
master
└ develop
  ├ feature-front
  ├ feature-back
  ├ feature-iot
  └ feature-log
```

- master : 운영 서버로 배포하기 위한 브랜치
- develop : 다음 출시 기능을 개발하는 브랜치
- feature : 세부 기능을 개발하는 브랜치

## 9**. 회고**