package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Location;

public interface LocationDAO  extends JpaRepository<Location, Long>{

}
