package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Insurance;
import com.revdoc.service.InsuranceService;

@CrossOrigin
@RestController
public class InsuranceController {
	@Autowired
	private InsuranceService service;
	
	// Edit Doctor Profile 
	@PostMapping("/createInsurance")
	public Insurance createInsurance(Insurance insurance) {
		return service.createInsurance(insurance);
	}
	@DeleteMapping("/insurance/{insuranceId}")
	public void deleteInsurance(@PathVariable long insuranceId) {
		service.deleteInsurance(insuranceId);
	}
	@PutMapping("/insurance")
	public Insurance updateInsurance(Insurance insurance) {
		return service.updateInsurance(insurance);
	}
	
	@GetMapping("/insurances")
	public List<Insurance> getAllInsurances() {
		return service.getAllInsurances();
	}
	
	@GetMapping("/insurance/{insuranceId}")
	public Insurance getInsuranceByInsuranceId(@PathVariable long insuranceId) {
		return service.getInsuranceByInsuranceId(insuranceId);
	}
}
