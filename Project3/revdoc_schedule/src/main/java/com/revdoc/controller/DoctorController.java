package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
<<<<<<< Updated upstream
import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;
=======
import com.revdoc.model.Followers;
>>>>>>> Stashed changes
import com.revdoc.service.DoctorInfoService;

@CrossOrigin
@RestController
public class DoctorController {

	@Autowired
	private DoctorInfoService service;
	
	@GetMapping("/doctor/{npi}")
	public Doctor getDoctorByNpi(@PathVariable long npi) {
		return service.getDoctorByNpi(npi);
	}
	
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return service.getAllDoctors();
	}

	
	@GetMapping("/allRatings/")
	public List<Feedback> getAllRatings(){
		return service.getAllFeedback();
	}
	@GetMapping("/allRatings/{npi}")
	public List<Feedback> getAllRatings(@PathVariable long npi){
		return service.getAllFeedback(npi);
	}
	
//	@GetMapping("/doctor/{npi}/ratings")
//	public List<Feedback> getAggregateRatings(@PathVariable long npi) {
//		return service.getFeedback(npi);
//	}
	
<<<<<<< Updated upstream
	@GetMapping("/doctor/{npi}/insurance")
	public List<Insurance> getInsurance(@PathVariable long npi){
		return service.getInsurance(npi);
	}
	
	@GetMapping("/doctor/{npi}/specialty")
	public List<Specialty> getSpecialty(@PathVariable long npi){
		return service.getSpecialty(npi);
	}
	
	@GetMapping("/doctor/{npi}/conditions")
	public List<Conditions> getConditions(@PathVariable long npi){
		return service.getConditions(npi);
=======
	@GetMapping("/following/{npi}/{revassociate}")
	public boolean isFollowing(@PathVariable long npi, @PathVariable String revassociate) {
		return service.isFollowing(npi,revassociate);
	}

	
	@GetMapping("/allFollowers")
	public List<Followers> getAllFollowers(){
		return service.allFollowers();
		
>>>>>>> Stashed changes
	}
	
	
}
