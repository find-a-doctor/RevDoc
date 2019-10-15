package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Doctor;

public interface DoctorService {
	

	public Doctor createDoctor(Doctor doctor);
	public Doctor getDoctorById(long npi);
	public List<Doctor> getAllDoctors();
	public Doctor updateDoctor(Doctor doctor);
	public void deleteDoctor(long npi);
	public List<Doctor> getDoctorByName(String name);


}
