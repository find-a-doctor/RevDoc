package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Doctor;
import com.revdoc.service.DoctorService;

@CrossOrigin
@RestController
public class DoctorController {
	
	@Autowired
	private DoctorService service;
	
	@PostMapping("/createDoctor")
	public Doctor createDoctor(@RequestBody Doctor doctor) {
		return service.createDoctor(doctor);
	}
	@GetMapping("/doctor/{npi}")
	public Doctor getDoctorById(@PathVariable long npi) {
		// TODO Auto-generated method stub
		return service.getDoctorById(npi);
	}

	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors() {
		// TODO Auto-generated method stub
		return service.getAllDoctors();
	}

	@PutMapping("/updateDoctor")
	public Doctor updateDoctor(@RequestBody Doctor doctor) {
		// TODO Auto-generated method stub
		return service.updateDoctor(doctor);
	}

	@DeleteMapping("/doctor/{npi}")
	public void deleteDoctor(@PathVariable long npi) {
		
		service.deleteDoctor(npi);
}
	
	@GetMapping("/")
	public String welcome() {
		return "Welcome to Doctor Profile Page";
	}
	
//	@GetMapping("/doctor/{name}")
//	public List<Doctor> getDoctorByName(String name) {
//		// TODO Auto-generated method stub
//		return service.getDoctorByName(name);
//	}
	
	

}
