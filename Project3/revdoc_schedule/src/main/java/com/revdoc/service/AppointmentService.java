package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Appointment;

/* AppointmentService Interface outlines 3 basic methods for returning:
* 1. A list of all appointments
* 2. A list of all appointments by Revature Associate
* 3. A list of all appointments by Doctor
*/
public interface AppointmentService {

	public List<Appointment> getAllAppointments();
	public List<Appointment> getAppointmentByRevAssociate(String email);
	public List<Appointment> getAppointmentByDoctor(String email);	
	
}
