package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.AppointmentDAO;
import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;
import com.revdoc.service.AppointmentService;

@Service
public class AppointmentServiceImpl implements AppointmentService {
	
	@Autowired
	private AppointmentDAO appointmentDao;
	
	public AppointmentServiceImpl() {
		// EMPTY CONSTRUCTOR BUSINESS STANDARD
	}

	@Override
	public List<Appointment> getAllAppointments() {
		return appointmentDao.findAll();
	}

	@Override
	public List<Appointment> getAppointmentByRevAssociate(String email) {
		return appointmentDao.findByRevAssociateRevAssociateEmail(email);
	}

	@Override
	public List<Appointment> getAppointmentByDoctor(String email) {
		return appointmentDao.findByDoctorEmail(email);
	}

}
