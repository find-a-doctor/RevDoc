package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Doctor;

public interface SearchDoctorService {

	public List<Object[]> doctorSearch(String search);
	public List<Object[]> getAllDoctors();
}
