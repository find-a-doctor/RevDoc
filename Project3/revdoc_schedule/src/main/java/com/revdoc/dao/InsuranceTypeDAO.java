package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.InsuranceType;

public interface InsuranceTypeDAO  extends JpaRepository<InsuranceType, Long>{

}
