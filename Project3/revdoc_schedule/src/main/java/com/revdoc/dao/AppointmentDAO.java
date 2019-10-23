package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Appointment;

@Repository
public interface AppointmentDAO extends JpaRepository<Appointment, Long>{
	
	List<Appointment> findAppointmentByRevAssociateRevAssociateEmailAndDoctorNpi(String email, long npi);



}
