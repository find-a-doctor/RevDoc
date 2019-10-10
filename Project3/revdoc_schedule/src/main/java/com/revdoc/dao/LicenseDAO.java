package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.License;

public interface LicenseDAO  extends JpaRepository<License, Long>{

}
