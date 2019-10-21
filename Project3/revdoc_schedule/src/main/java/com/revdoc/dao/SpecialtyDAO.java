package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Specialty;

@Repository
public interface SpecialtyDAO  extends JpaRepository<Specialty, Long>{

	@Query("select s from Specialty s where s.doctor.npi =:npi")
	List<Specialty> getSpecialty(long npi);
	

}
