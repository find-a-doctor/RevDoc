package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Conditions;

public interface ConditionsDAO  extends JpaRepository<Conditions, Long>{

}
