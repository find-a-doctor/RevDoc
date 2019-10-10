package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Available;

@Repository
public interface AvailableDAO  extends JpaRepository<Available, Long>{

}
