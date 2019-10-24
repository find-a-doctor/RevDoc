package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.ConditionType;

@Repository
public interface ConditionTypeDAO  extends JpaRepository<ConditionType, Long>{

}
