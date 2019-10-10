package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Insurance;

public interface InsuranceDAO  extends JpaRepository<Insurance, Long>{

}
