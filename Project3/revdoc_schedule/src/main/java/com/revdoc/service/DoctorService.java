package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Doctor;

public interface DoctorService {
	

	public Doctor createDoctor(Doctor doctor);
	public Doctor getDoctorByNpi(long npi);
	public List<Doctor> getAllDoctors();
	public void updateDoctor(long npi, Doctor doctor);
	public void deleteDoctor(long npi, Doctor doctor);
	public List<Doctor> getDoctorByName(String name);


}
