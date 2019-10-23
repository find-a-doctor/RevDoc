package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.DoctorPost;

@Repository
public interface DoctorPostDAO  extends JpaRepository<DoctorPost, Long>{

}
