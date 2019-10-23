package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;

import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;
import com.revdoc.model.Followers;

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

	public Doctor updateFollowers(long npi);

	public boolean isFollowing(long npi, String revassociate);

	public List<Followers> allFollowers();

	public Followers followDoctor(Followers followers);

	public void unfollowDoctor(long followerId);

}
