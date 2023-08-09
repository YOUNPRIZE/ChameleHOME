//package com.ssafy.a101.config;
//
//import com.ssafy.a101.api.service.UserDetailService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//import static org.springframework.boot.autoconfigure.security.servlet.PathRequest.toH2Console;
//
//@RequiredArgsConstructor
//@Configuration
//public class WebSecurityConfig {
//
//    private final UserDetailService userService;
//
//    @Bean
//    // 스프링 시큐리티의 모든 기능을 사용하지 않게 설정하는 메소드
//    // 정적 리소스만 비활성화
//    public WebSecurityCustomizer configure() {
//        return (web) -> web.ignoring()
//                .requestMatchers(toH2Console())
//                .antMatchers("/static/**");
//    }
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        return http
//                .authorizeRequests()
//                // /login, /signup, /user로 요청이 오면 인증/인가 없이도 접근 가능
//                .antMatchers("/api/signup", "/api/login").permitAll()
//                //.antMatchers("/**").permitAll()
//                // anyRequest : 위에서 설정한 url 이외의 요청에 대해 설정
//                // authenticated : 별도의 인가는 필요치 않지만 인증이 접근할 수 있음.
//                .anyRequest().authenticated()
//                .and()
//                .formLogin()
//                // loginPage : 로그인 페이지 경로를 설정
//                .loginPage("/login")
//                // 로그인이 완료됐을 때 이동할 경로 설정
//                .defaultSuccessUrl("/articles")
//                .and()
//                .logout()
//                // 로그아웃 했을 때  이동할 경로 설정
//                .logoutSuccessUrl("/login")
//                // 로그아웃 이후 세션 전체 삭제
//                .invalidateHttpSession(true)
//                .and()
//                // csrf 비활성화
//                .csrf().disable()
//                .build();
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailService userDetailService) throws Exception {
//        return http.getSharedObject(AuthenticationManagerBuilder.class)
//                .userDetailsService(userService)
//                .passwordEncoder(bCryptPasswordEncoder)
//                .and()
//                .build();
//    }
//
//    @Bean
//    public BCryptPasswordEncoder bCryptPasswordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}