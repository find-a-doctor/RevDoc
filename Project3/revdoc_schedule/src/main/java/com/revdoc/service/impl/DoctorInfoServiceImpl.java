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
	private DoctorDAO dDao;

	@Autowired
	private FeedbackDAO fbDao;

	@Autowired
	private FollowersDAO flDao;

	@Autowired
	private InsuranceDAO iDao;

	@Autowired
	private SpecialtyDAO sDao;

	@Autowired
	private ConditionsDAO cDao;

	@Override
	public Doctor getDoctorByNpi(long npi) {
		return dDao.findByNpi(npi);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return dDao.findAll();
	}

	@Override
	public List<Feedback> getAllFeedback() {
		return fbDao.findAll();
	}
	// returns all feedback for all doctors

	@Override
	public List<Feedback> getAllFeedback(long npi) {
		return fbDao.getAll(npi);
	}
	//returns only feedback for specified doctor

	@Override
	public List<Insurance> getInsurance(long npi){
		return iDao.getInsurance(npi);
	}

	@Override
	public List<Specialty> getSpecialty(long npi) {
		return sDao.getSpecialty(npi);
	}

	@Override
	public List<Conditions> getConditions(long npi) {
		return cDao.getConditions(npi);
	}

	@Override
	public Feedback submitFeedback(Feedback feedback) {
		return fbDao.save(feedback);
	}

	@Override
	public Doctor updateFollowers(long npi) {
		int numberOfFollowers= flDao.countFollowers(npi);
		Doctor doctor=getDoctorByNpi(npi);
		doctor.setNumberOfFollowers(numberOfFollowers);
		return doctor;
	}

	@Override
	public List<Followers> allFollowers() {
		return flDao.findAll();
	}

	@Override
	public boolean isFollowing(long npi, String revassociate) {
		List<Followers> followingList=flDao.isFollowing(npi, revassociate);
		return(followingList.size()!=0);
	}

	@Override
	public Followers followDoctor(Followers followers) {
		return flDao.save(followers);
	}

	@Override
	public void unfollowDoctor(long followerId) {
		flDao.deleteById(followerId);
	}


}
