package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.FeedbackDAO;
import com.revdoc.dao.FollowersDAO;
import com.revdoc.dao.InsuranceDAO;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Insurance;
import com.revdoc.service.DoctorInfoService;

@Service
public class DoctorInfoServiceImpl implements DoctorInfoService {

	@Autowired
	private DoctorDAO dDao;

	@Autowired
	private FeedbackDAO fbDao;

	@Autowired
	private FollowersDAO flDao;
	
	@Autowired
	private InsuranceDAO iDao;

	@Override
	public Doctor getDoctorByNpi(long npi) {
		return dDao.findByNpi(npi);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return dDao.findAll();
	}
//
//	@Override
//	public List<Feedback> getFeedback(long npi) {
//		return fbDao.getFeedback(npi);
//	}

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

}
