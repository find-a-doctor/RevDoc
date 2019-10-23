package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.InsuranceType;

@Repository
public interface InsuranceTypeDAO  extends JpaRepository<InsuranceType, Long>{

}
