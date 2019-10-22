package com.revdoc.service.impl;

//IMPORTS
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.AppointmentDAO;
import com.revdoc.model.Appointment;
import com.revdoc.service.AppointmentService;

/* Implementation of Service interface allows access to 3 methods that retrieve data from DAO */
@Service
public class AppointmentServiceImpl implements AppointmentService {
	
	// JPA Annotation wiring up persistence-layer data access
	@Autowired
	private AppointmentDAO appointmentDao;
	
	// EMPTY CONSTRUCTOR BUSINESS STANDARD
	public AppointmentServiceImpl() {};

	// Returns a list of all appointments
	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentDao.findAll();
	}

	// Returns a list of all appointments by RevAssociateEmail
	@Override
	public List<Appointment> getAppointmentByRevAssociate(String email) {
		return appointmentDao.findByRevAssociateRevAssociateEmail(email);
	}

	// Returns a list of all appointments made for a specified Doctor by DoctorEmail
	@Override
	public List<Appointment> getAppointmentByDoctor(String email) {
		return appointmentDao.findByDoctorEmail(email);
	}

}
