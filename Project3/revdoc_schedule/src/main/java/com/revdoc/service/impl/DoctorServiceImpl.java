package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.DoctorDAO;
import com.revdoc.model.Doctor;
import com.revdoc.service.DoctorService;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	private DoctorDAO dao;
	
	public DoctorServiceImpl() {
		
	}

	@Override
	public Doctor createDoctor(Doctor doctor) {
		return dao.save(doctor);
	}

	@Override
	public Doctor getDoctorById(long npi) {
		return dao.findByNpi(npi);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return dao.findAll();
	}

	@Override
	public Doctor updateDoctor(Doctor doctor) {
		return dao.save(doctor);
	}

	@Override
	public void deleteDoctor(long npi) {
		dao.deleteById(npi);
		
	}

	@Override
	public List<Doctor> getDoctorByName(String name) {
		return null;
	}


	

}
