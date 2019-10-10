package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Specialty;

public interface SpecialtyDAO  extends JpaRepository<Specialty, Long>{

}
