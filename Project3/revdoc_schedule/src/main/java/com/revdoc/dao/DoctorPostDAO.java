package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.DoctorPost;

public interface DoctorPostDAO  extends JpaRepository<DoctorPost, Long>{

}
