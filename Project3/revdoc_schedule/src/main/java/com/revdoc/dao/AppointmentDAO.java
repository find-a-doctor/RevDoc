package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;

@Repository
public interface AppointmentDAO extends JpaRepository<Appointment, Long>{
	
	List<Appointment> findByRevAssociateRevAssociateEmail(String email);
	List<Appointment> findByDoctorEmailContaining(String email);

}
