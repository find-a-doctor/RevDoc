package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Doctor;
import com.revdoc.model.Location;

public interface AppointmentCalendarService {

	public Location getLocationById(long id);
	public Doctor getDoctorById(long id);
}