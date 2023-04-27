package com.khaki.Instagram.web.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor // 기본 생성자
@Getter
@Data
public class Member {
    /*
    * user_id & email 로 로그인
    * id name pw number email role
    * */
    private String id;
    private String name;
    private String number;
    private String email;
    private String role;

    @Builder
    public Member(String id, String name, String number, String email, String role){
        this.id = id;
        this.name = name;
        this.number = number;
        this.email = email;
        this.role = role;
    }
}
