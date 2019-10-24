package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.RevAssociate;

@Repository
public interface RevAssociateDAO  extends JpaRepository<RevAssociate, String>{

}
