package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Doctor;

public interface DoctorInfoService {

	// Edit Doctor Profile
	public Doctor createDoctor(Doctor doctor);
	public void deleteDoctor(long npi, Doctor doctor);
	public void updateDoctor(Doctor doctor, long npi);
	public List<Doctor> getAllDoctors();
	public Doctor getDoctorByNpi(long npi);
	public List<Object[]> getDoctorProfileByNpi(long npi);
	public void updateDoctorProfile(Object[] profile);
}
