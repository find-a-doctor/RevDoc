package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.License;

@Repository
public interface LicenseDAO  extends JpaRepository<License, Long>{

}
