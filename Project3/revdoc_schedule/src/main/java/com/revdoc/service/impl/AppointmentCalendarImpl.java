package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.model.Doctor;
import com.revdoc.model.Location;
import com.revdoc.service.AppointmentCalendarService;

@Service
public class AppointmentCalendarImpl implements AppointmentCalendarService {

	@Autowired
	private LocationDAO locationDao;
	@Autowired
	private DoctorDAO doctorDao;
	
	@Override
	public Location getLocationById(long id) {
		return locationDao.findById(id).get();
	}

	@Override
	public Doctor getDoctorById(long id) {
		return doctorDao.findById(id).get();
	}

}
