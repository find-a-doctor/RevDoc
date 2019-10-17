package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.AppointmentDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.Location;
import com.revdoc.service.AppointmentCalendarService;

@Service
public class AppointmentCalendarImpl implements AppointmentCalendarService {

	@Autowired
	private LocationDAO locationDao;
	@Autowired
	private DoctorDAO doctorDao;
	@Autowired 
	private AppointmentDAO appointmentDao;
	@Autowired
	private InsuranceTypeDAO insuranceTypeDao;
	
	@Override
	public Location getLocationById(long id) {
		return locationDao.findById(id).get();
	}

	@Override
	public Doctor getDoctorById(long id) {
		return doctorDao.findById(id).get();
	}

	@Override
	public Appointment setDoctorAppointment(Appointment appointment) {
		Appointment appointment1;
		try {
			appointment1 = appointmentDao.save(appointment);
		}catch(Exception e) {
			appointment1 = null;
		}
		// TODO Auto-generated method stub
		return appointment1;
	}

	@Override
	public List<InsuranceType> getInsuranceTypeByNPI(long npi) {
		// TODO Auto-generated method stub
		return insuranceTypeDao.getInsuranceTypeByNPI(npi+"");
	}
}
