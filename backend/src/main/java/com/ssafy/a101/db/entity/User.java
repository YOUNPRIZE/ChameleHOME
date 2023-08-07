package com.ssafy.a101.db.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Table(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "userId", updatable = false, unique = true)
    private String userId;

    @Column(name = "password", updatable = true)
    private String password;

    @Column(name = "nickname", updatable = true)
    private String nickname;

    @Column(name = "number", updatable = true)
    private Long number;

    @Column(name = "user_img", updatable = true)
    private String user_img;

    @Builder
    public User(String userId, String password, String nickname, Long number, String user_img, String auth) {
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
        this.user_img = user_img;
    }

    public void update(String userId, String password, String nickname, Long number, String user_img){
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.number = number;
        this.user_img = user_img;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("user"));
    }

    @Override
    public String getUsername() {
        return userId;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}