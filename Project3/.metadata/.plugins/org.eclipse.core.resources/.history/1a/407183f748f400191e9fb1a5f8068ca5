package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.Location;

public interface AppointmentCalendarService {

	public Location getLocationById(long id);
	public Doctor getDoctorById(long id);
	public List<InsuranceType> getInsuranceTypeByNPI(long npi); 
	public Appointment setDoctorAppointment(Appointment appointment);
	public List<Appointment> getAllUserAppointmentById(String revAssociateEmail);
	public List<Appointment> getAllDoctorAppointmentById(long npi);
	
}
