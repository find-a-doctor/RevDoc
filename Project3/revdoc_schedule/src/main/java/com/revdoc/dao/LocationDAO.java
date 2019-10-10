package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Location;

@Repository
public interface LocationDAO  extends JpaRepository<Location, Long>{

}
