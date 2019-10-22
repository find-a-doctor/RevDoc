package com.revdoc.service;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.revdoc.dao.FollowersDAO;
import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Followers;
import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DoctorInfoServiceTest {
	
	@Autowired 
	DoctorInfoService DIS;
	
	@Autowired
	private FollowersDAO flDao;
	
	
	
	@Test
	public void test() {
	System.out.println("Starting tests");
	}
	
	@Test
	public void testGetDoctorByNpi() {
	Doctor actual = DIS.getDoctorByNpi(1000000001);	
		
	assertNotNull(actual);
	}
	
	@Test
	public void testGetAllDoctors() {
	List<Doctor> actual = DIS.getAllDoctors();
	assertNotNull(actual.get(0));
		
		
	}
	
	@Test //feedback for all doctors
	public void testGetAllFeedback() {
	List<Feedback> actual =DIS.getAllFeedback();	
	assertNotNull(actual.get(0));	
		
	}
	
	@Test //feedback for specific doctor
	public void testGetDoctorFeedback() {
	List<Feedback> actual = DIS.getAllFeedback(1000000001);
	assertNotNull(actual.get(0));
			
	}
	
	@Test
	public void testGetInsurance() {
	List<Insurance> actual = DIS.getInsurance(1000000001);	
	assertNotNull(actual.get(0));
		
	}
	
	@Test
	public void testGetSpecialty() {
	List<Specialty> actual = DIS.getSpecialty(1000000001);	
	assertNotNull(actual.get(0));
	
	}
	@Test
	public void testGetConditions() {
	List<Conditions> actual = DIS.getConditions(1000000001);	
	assertNotNull(actual.get(0));	
		
	}
	
	@Test
	public void testSubmitFeedback() {
	Feedback feedback = new Feedback();	
	Feedback actual = DIS.submitFeedback(feedback);	
	
	assertNotNull(actual);
	}
	
	@Test 
	public void testUpdateFollowers() {
	int numberOfFollowers= flDao.countFollowers(1000000001);
	Doctor doctor= DIS.getDoctorByNpi(1000000001);
	doctor.setNumberOfFollowers(numberOfFollowers);
		
	assertNotNull(doctor);
	}
	
	@Test
	public void TestIsFollowing() {
	List<Followers> followingList=flDao.isFollowing(1000000001, "");
	boolean actual = false;
	if(followingList.size()!=0) {
			actual=true;
		}
	assertFalse(actual);
	
	}
}
