package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Doctor;

@Repository
public interface DoctorDAO  extends JpaRepository<Doctor, Long>{
	@Query("select d from Doctor d where d.npi = :npi")
	Doctor findByNpi(long npi);
	
//	@Modifying 
//	@Query("update Doctor d set d.doctorname = :doctorname, d.experience= :experience, d.email= :email, d.phone= :phone, d.aboutme= :aboutme "
//			+ "where d.npi= :npi")
//	Doctor updateDoctor(Doctor doctor);
}
