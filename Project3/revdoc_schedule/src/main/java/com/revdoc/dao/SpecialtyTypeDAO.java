package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.SpecialtyType;

@Repository
public interface SpecialtyTypeDAO  extends JpaRepository<SpecialtyType, Long>{

}
