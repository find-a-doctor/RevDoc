package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.DoctorLicense;

public interface DoctorLicenseDAO  extends JpaRepository<DoctorLicense, Long>{

}
