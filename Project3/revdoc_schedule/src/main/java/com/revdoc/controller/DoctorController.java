package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.Feedback;
import com.revdoc.model.Followers;
import com.revdoc.model.Insurance;
import com.revdoc.model.Specialty;
import com.revdoc.service.DoctorInfoService;

@CrossOrigin
@RestController
public class DoctorController {

	@Autowired
	private DoctorInfoService service;

//	@GetMapping("/doctor/{npi}")
	@GetMapping("/doctorinfo/{npi}")
	public Doctor getDoctorByNpi(@PathVariable long npi) {
		return service.getDoctorByNpi(npi);
	}

	@GetMapping("/doctors/info")
	public List<Doctor> getAllDoctors(){
		return service.getAllDoctors();
	}
	//this is redundant, only used for testing, but the function is used in SearchDoctorController

	@GetMapping("/allRatings/")
	public List<Feedback> getAllRatings(){
		return service.getAllFeedback();
	}
	
	@GetMapping("/allRatings/{npi}")
	public List<Feedback> getAllRatings(@PathVariable long npi){
		return service.getAllFeedback(npi);
	}

//	@GetMapping("/doctor/{npi}/insurance")
	@GetMapping("/doctorinfo/{npi}/insurance")
	public List<Insurance> getInsurance(@PathVariable long npi){
		return service.getInsurance(npi);
	}

//	@GetMapping("/doctor/{npi}/specialty")
	@GetMapping("/doctorinfo/{npi}/specialty")
	public List<Specialty> getSpecialty(@PathVariable long npi){
		return service.getSpecialty(npi);
	}

//	@GetMapping("/doctor/{npi}/conditions")
	@GetMapping("/doctorinfo/{npi}/conditions")
	public List<Conditions> getConditions(@PathVariable long npi){
		return service.getConditions(npi);
	}

	@PostMapping("/feedback")
	public Feedback submitFeedback(@RequestBody Feedback feedback) {
		return service.submitFeedback(feedback);
	//not yet working?
	}

	@PostMapping("/updateDoctor/{npi}")
	public Doctor updateDoctor(@PathVariable long npi) {
		return service.updateFollowers(npi);
	}

	@GetMapping("/following/{npi}/{revassociate}")
	public boolean isFollowing(@PathVariable long npi, @PathVariable String revassociate) {
		return service.isFollowing(npi,revassociate);
	}

	@GetMapping("/allFollowers")
	public List<Followers> getAllFollowers(){
		return service.allFollowers();
	}

	@PostMapping("/follow/")
	public Followers followDoctor(@RequestBody Followers followers) {
		return service.followDoctor(followers);
	}

	@DeleteMapping("/follow/{followerId}")
	public void unfollowDoctor(@PathVariable long followerId) {
		service.unfollowDoctor(followerId);
	}

}



