package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Doctor;
import com.revdoc.service.DoctorInfoService;

//@CrossOrigin
@RestController
public class DoctorController {
	
	@Autowired
	private DoctorInfoService service;
	

	// Edit Doctor Profile 
	@PostMapping("/createDoctor")
	public Doctor createDoctor(@RequestBody Doctor doctor) {
		return service.createDoctor(doctor);
	}
	
	@DeleteMapping("/doctor/{npi}")
	public void deleteDoctor(@PathVariable long npi,
							@RequestBody Doctor doctor) {
		service.deleteDoctor (npi, doctor);
	}
	
	@PutMapping("/doctor/{npi}")
	public void updateDoctor(@RequestBody Doctor doctor, @PathVariable long npi) {
		service.updateDoctor(doctor, npi);
	}
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors() {
		return service.getAllDoctors();
	}
	
	@GetMapping("/doctor/{npi}")
	public Doctor getDoctorByNpi(@PathVariable long npi) {
		return service.getDoctorByNpi(npi);
	}
	
	@GetMapping("/doctorProfile/{npi}")
	public List<Object[]> getDoctorProfileByNpi(@PathVariable long npi) {
		return service.getDoctorProfileByNpi(npi);
	}
	
	@PutMapping("/doctorProfile")
	public void updateDoctorProfile(@RequestBody Object[] profile) {
		service.updateDoctorProfile(profile);
	}
}
