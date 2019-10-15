package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Conditions;

@Repository
public interface ConditionsDAO  extends JpaRepository<Conditions, Long>{

	@Query("select c from Conditions c where c.doctor.npi =:npi")
	List<Conditions> getConditions(long npi);

}
