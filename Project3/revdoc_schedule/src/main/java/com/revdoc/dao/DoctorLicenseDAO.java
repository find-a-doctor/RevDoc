package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.DoctorLicense;

@Repository
public interface DoctorLicenseDAO  extends JpaRepository<DoctorLicense, Long>{

}
