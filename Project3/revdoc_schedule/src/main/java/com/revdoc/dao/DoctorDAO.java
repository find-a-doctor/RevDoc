package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Doctor;

@Repository
public interface DoctorDAO  extends JpaRepository<Doctor, Long>{

	@Query("select d from Doctor d where d.npi = :npi")
	Doctor findByNpi(long npi);


	
}
