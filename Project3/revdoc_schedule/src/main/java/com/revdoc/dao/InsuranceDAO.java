package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Insurance;

@Repository
public interface InsuranceDAO  extends JpaRepository<Insurance, Long>{

}
