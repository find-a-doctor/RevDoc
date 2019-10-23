package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Doctor;
import com.revdoc.model.DoctorLicense;

@Repository
public interface DoctorLicenseDAO  extends JpaRepository<DoctorLicense, Long>{
	@Query("select d from DoctorLicense d where d.doctorLicenseId = :doctorLicenseId")
	DoctorLicense findByDoctorLicenseId(long doctorLicenseId);
}
