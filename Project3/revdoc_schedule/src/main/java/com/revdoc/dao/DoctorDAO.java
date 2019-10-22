package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Doctor;

@Repository
public interface DoctorDAO  extends JpaRepository<Doctor, Long>{

}
