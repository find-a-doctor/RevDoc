package com.revdoc.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.ConditionTypeDAO;
import com.revdoc.dao.ConditionsDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.DoctorLicenseDAO;
import com.revdoc.dao.FeedbackDAO;
import com.revdoc.dao.FollowersDAO;
import com.revdoc.dao.InsuranceDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.LicenseDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.dao.SpecialtyDAO;
import com.revdoc.dao.SpecialtyTypeDAO;
import com.revdoc.model.ConditionType;
import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.DoctorLicense;
import com.revdoc.model.Feedback;

import com.revdoc.model.Followers;
import com.revdoc.model.Insurance;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.License;
import com.revdoc.model.Location;
import com.revdoc.model.Specialty;
import com.revdoc.model.SpecialtyType;
import com.revdoc.service.DoctorInfoService;

@Service
public class DoctorInfoServiceImpl implements DoctorInfoService {
	
	@Autowired
	private DoctorDAO doctorDAO;
	
	@Autowired
	private LocationDAO locationDAO;

	@Autowired
	private LicenseDAO licenseDAO;
	
	@Autowired
	private DoctorLicenseDAO doctorLicenseDAO;
	
	@Autowired
	private SpecialtyTypeDAO specialtyTypeDAO;
	
	@Autowired
	private SpecialtyDAO specialtyDAO;

	@Autowired
	private ConditionTypeDAO conditionTypeDAO;

	@Autowired
	private ConditionsDAO conditionsDAO;

	@Autowired
	private InsuranceTypeDAO insuranceTypeDAO;

	@Autowired
	private InsuranceDAO insuranceDAO;

	@Autowired
	private FeedbackDAO feedbackDAO;

	@Autowired
	private FollowersDAO followersDAO;
	@Override
	public Doctor createDoctor(Doctor doctor) {
		return doctorDAO.save(doctor);
	}

	@Override
	public void deleteDoctor(long npi, Doctor doctor) {
//		doctorDAO.deleteByNpi(npi);
		
	}

	@Override
	public Doctor getDoctorByNpi(long npi) {
		return doctorDAO.findByNpi(npi);
	}

	@Override
	public List<Doctor> getAllDoctors() {
		return doctorDAO.findAll();
	}

	@Override
	public void updateDoctor(Doctor doctor, long npi) {
		doctorDAO.save(doctor);
	}

	@Override
	public List<Feedback> getAllFeedback() {
		return feedbackDAO.findAll();
	}
	// returns all feedback for all doctors
	// for testing

	@Override
	public List<Feedback> getAllFeedback(long npi) {
		return feedbackDAO.getAll(npi);
	}
	//returns only feedback for specified doctor
	
	@Override
	public List<Object[]> getDoctorProfileByNpi(long npi) {
		return doctorDAO.findDoctorProfileByNpi(npi);
	}

	@Override
	public void updateDoctorProfile(Object[] profile) {
		Location location = new Location((int)profile[8], (String)profile[9], (String)profile[10], (String)profile[11], 
				(String)profile[12], (String)profile[13], (String)profile[14]);
		location = locationDAO.save(location);

		Doctor doctor = new Doctor((int)profile[0], (String)profile[1], (int)profile[2], (String)profile[3], 
				(String)profile[4], (String)profile[5], (String)profile[6], (int)profile[7], location);
		doctor = doctorDAO.save(doctor);
		
		License license = new License((int)profile[15], (String)profile[16]);
		license = licenseDAO.save(license);
		Date licenseDate = new Date();
		SimpleDateFormat textFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			licenseDate = textFormat.parse((String)profile[18]);
		} catch (ParseException e) {
			System.out.println(e.getMessage() );
		}
		
		
		DoctorLicense doctorLicense = new DoctorLicense((int)profile[17], doctor, license, licenseDate);
		doctorLicense = doctorLicenseDAO.save(doctorLicense);

		SpecialtyType specialtyType = new SpecialtyType((int)profile[19], (String)profile[20]);
		specialtyType = specialtyTypeDAO.save(specialtyType);
		
		Specialty specialty = new Specialty((int)profile[21], doctor, specialtyType);
		specialty = specialtyDAO.save(specialty);
		
		ConditionType conditionType = new ConditionType((int)profile[22], (String)profile[23]);
		conditionType = conditionTypeDAO.save(conditionType);

		Conditions condition = new Conditions((int)profile[24], conditionType, doctor);
		condition = conditionsDAO.save(condition);
		
		InsuranceType insuranceType = new InsuranceType((int)profile[25], (String)profile[26]);
		insuranceType = insuranceTypeDAO.save(insuranceType);

		Insurance insurance = new Insurance((int)profile[27], doctor, insuranceType);
		insurance=insuranceDAO.save(insurance);

	}

	@Override
	public List<Insurance> getInsurance(long npi){
		return insuranceDAO.getInsurance(npi);
	}

	@Override
	public List<Specialty> getSpecialty(long npi) {
		return specialtyDAO.getSpecialty(npi);
	}

	@Override
	public List<Conditions> getConditions(long npi) {
		return conditionsDAO.getConditions(npi);
	}

	@Override
	public Feedback submitFeedback(Feedback feedback) {
		return feedbackDAO.save(feedback);
	}

	@Override
	public Doctor updateFollowers(long npi) {
		int numberOfFollowers= followersDAO.countFollowers(npi);
		Doctor doctor=getDoctorByNpi(npi);
		doctor.setNumberOfFollowers(numberOfFollowers);
		return doctor;
	}

	@Override
	public List<Followers> allFollowers() {
		return followersDAO.findAll();
	}

	@Override
	public boolean isFollowing(long npi, String revassociate) {
		List<Followers> followingList=followersDAO.isFollowing(npi, revassociate);
		return(followingList.size()!=0);
	}

	@Override
	public Followers followDoctor(Followers followers) {
		return followersDAO.save(followers);
	}

	@Override
	public void unfollowDoctor(long followerId) {
		followersDAO.deleteById(followerId);
	}

	@Override
	public Doctor updateDoctor(Doctor doctor) {
		return doctorDAO.save(doctor);
		
	}

}