package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;

@Repository
public interface AppointmentDAO extends JpaRepository<Appointment, Long>{
	
	/*
	 * For additional info, see:
	 * JPA Queries -
	 * https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
	 * 
	 * This repository exposes 2 custom query methods as well as standard query methods enabled by JPA repository.
	 * 
	 * 1. findByRevAssociateRevAssociateEmail(String email)
	 * 2. findByDoctorEmail(String email)
	 * 
	 */	
	List<Appointment> findByRevAssociateRevAssociateEmail(String email);
	List<Appointment> findByDoctorEmail(String email);

}
