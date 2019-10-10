package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Followers;

public interface FollowersDAO  extends JpaRepository<Followers, Long>{

}
