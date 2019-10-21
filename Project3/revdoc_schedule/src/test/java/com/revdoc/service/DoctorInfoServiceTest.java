package com.revdoc.service;

import java.util.List;

import javax.validation.constraints.AssertTrue;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

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

public class DoctorInfoServiceTest {
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
	
	@Test
	public void test() {
	System.out.println("Starting tests");
	}
	
	@Test
	void getDoctorByNpi(long npi) {
		
		
		
	}
	
	@Test
	public List<Doctor> getAllDoctors() {
		
		return dDao.findAll();
		
	}
	@Test
	void getAllFeedback() {
		
		
		
	}
	@Test
	void getAllFeedback(long npi) {
		
		
		
	}
	@Test
	void getInsurance(long npi) {
		
	
		
	}
	@Test
	void getSpecialty(long npi) {
		
	}
	@Test
	void getConditions(long npi) {
		
		
		
	}
	
	@Test
	void submitFeedback(Feedback feedback) {
		
	}
	
	@Test 
	public Doctor updateFollowers(long npi) {
		int numberOfFollowers= flDao.countFollowers(npi);
		Doctor doctor=getDoctorByNpi(npi);
		doctor.setNumberOfFollowers(numberOfFollowers);
		return doctor;
	}
	
	@Test
	@AssertTrue
	public boolean isFollowing(long npi, String revassociate) {
		List<Followers> followingList=flDao.isFollowing(npi, revassociate);
		return(followingList.size()!=0);
		
	}
}
