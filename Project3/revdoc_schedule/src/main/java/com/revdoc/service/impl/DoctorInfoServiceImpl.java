package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.ConditionsDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.FeedbackDAO;
import com.revdoc.dao.FollowersDAO;
import com.revdoc.dao.InsuranceDAO;
import com.revdoc.dao.SpecialtyDAO;
import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Followers;
import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;
import com.revdoc.service.DoctorInfoService;

@Service
public class DoctorInfoServiceImpl implements DoctorInfoService{


	@Autowired
	private DoctorDAO doctorDao;

	@Autowired
	private FeedbackDAO feedbackDao;

	@Autowired
	private FollowersDAO followersDao;

	@Autowired
	private InsuranceDAO insuranceDao;

	@Autowired
	private SpecialtyDAO specialtyDao;

	@Autowired
	private ConditionsDAO conditionsDao;

	@Override
	public Doctor getDoctorByNpi(long npi) {
		return doctorDao.findByNpi(npi);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return doctorDao.findAll();
	}

//	@Override
//	public List<Feedback> getAllFeedback() {
//		return feedbackDao.findAll();
//	}
	// returns all feedback for all doctors
	// for testing

	@Override
	public List<Feedback> getAllFeedback(long npi) {
		return feedbackDao.getAll(npi);
	}
	//returns only feedback for specified doctor


	@Override
	public List<Insurance> getInsurance(long npi){
		return insuranceDao.getInsurance(npi);
	}

	@Override
	public List<Specialty> getSpecialty(long npi) {
		return specialtyDao.getSpecialty(npi);
	}

	@Override
	public List<Conditions> getConditions(long npi) {
		return conditionsDao.getConditions(npi);
	}

	@Override
	public Feedback submitFeedback(Feedback feedback) {
		return feedbackDao.save(feedback);
	}

	@Override
	public Doctor updateFollowers(long npi) {
		int numberOfFollowers= followersDao.countFollowers(npi);
		Doctor doctor=getDoctorByNpi(npi);
		doctor.setNumberOfFollowers(numberOfFollowers);
		return doctor;
	}

	@Override
	public List<Followers> allFollowers() {
		return followersDao.findAll();
	}

	@Override
	public boolean isFollowing(long npi, String revassociate) {
		List<Followers> followingList=followersDao.isFollowing(npi, revassociate);
		System.out.println("in doctor info service impl");
		return(followingList.size()!=0);
	}

	@Override
	public Followers followDoctor(Followers followers) {
		return followersDao.save(followers);
	}

	@Override
	public void unfollowDoctor(long followerId) {
		followersDao.deleteById(followerId);
	}


}
