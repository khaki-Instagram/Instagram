package com.khaki.Instagram.repository;

import com.khaki.Instagram.web.dto.Member;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberRepository {
    Optional<Member> findByEmailAndProvider(String email, String provider);
}
