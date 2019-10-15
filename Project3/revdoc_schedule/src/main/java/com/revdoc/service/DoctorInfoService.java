package com.revdoc.service;


import java.util.List;

import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Insurance;

public interface DoctorInfoService {
	
	public Doctor getDoctorByNpi(long npi);

	public List<Doctor> getAllDoctors();
	
	public List<Feedback> getAllFeedback();
//	public List<Feedback> getAllFeedback(long npi);

	public List<Feedback> getAllFeedback(long npi);

	List<Insurance> getInsurance(long npi);
	
}
