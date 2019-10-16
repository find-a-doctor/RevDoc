package com.revdoc.service;


import java.util.List;

import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;

public interface DoctorInfoService {
	
	public Doctor getDoctorByNpi(long npi);

	public List<Doctor> getAllDoctors();
	
	public List<Feedback> getAllFeedback();
//	public List<Feedback> getAllFeedback(long npi);

	public List<Feedback> getAllFeedback(long npi);

	public List<Insurance> getInsurance(long npi);

	public List<Specialty> getSpecialty(long npi);

	public List<Conditions> getConditions(long npi);

	public Feedback submitFeedback(Feedback feedback);
	
}
