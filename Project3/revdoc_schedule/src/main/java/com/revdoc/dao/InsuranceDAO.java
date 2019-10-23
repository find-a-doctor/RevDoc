package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Insurance;

@Repository
public interface InsuranceDAO  extends JpaRepository<Insurance, Long>{
	@Query("select d from Insurance d where d.insuranceId = :insuranceId")
	Insurance findByInsuranceId (long insuranceId);
}
