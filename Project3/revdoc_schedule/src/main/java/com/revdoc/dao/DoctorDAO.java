package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Doctor;

public interface DoctorDAO  extends JpaRepository<Doctor, Long>{

}
