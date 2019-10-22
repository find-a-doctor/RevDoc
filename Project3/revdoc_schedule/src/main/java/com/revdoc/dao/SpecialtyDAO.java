package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Specialty;

@Repository
public interface SpecialtyDAO  extends JpaRepository<Specialty, Long>{

}
