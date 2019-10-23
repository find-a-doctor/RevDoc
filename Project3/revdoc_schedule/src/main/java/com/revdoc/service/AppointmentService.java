package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;

public interface AppointmentService {

	public List<Appointment> getAllAppointments();
	public List<Appointment> getAppointmentByRevAssociate(String email);
	public List<Appointment> getAppointmentByDoctor(String email);	
	
}
