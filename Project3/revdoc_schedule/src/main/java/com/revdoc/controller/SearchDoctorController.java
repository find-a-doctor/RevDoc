package com.revdoc.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.ConditionType;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.SpecialtyType;
import com.revdoc.service.SearchDoctorService;

@CrossOrigin
@RestController
public class SearchDoctorController {

	@Autowired
	private SearchDoctorService doctorSearchService;
	
	@GetMapping("/searchDoctor/{search}")
	public List<Object[]> searchDoctors(@PathVariable String search) {
		System.out.println("Search Doctor: "+search);
		return doctorSearchService.doctorSearch(search);
	}
	
	@GetMapping("/doctors")
	public List<Object[]> getAllDoctors() {
		System.out.println("in Controller");
		return doctorSearchService.getAllDoctors();
	}
	
	@GetMapping("/conditionTypes")
	public List<ConditionType> getAllConditionTypes() {
		return doctorSearchService.getAllConditionType();
	}
	
	@GetMapping("/insuranceTypes")
	public List<InsuranceType> getAllInsuranceTypes() {
		return doctorSearchService.getAllInsuranceType();
	}
	
	@GetMapping("/specialtyTypes")
	public List<SpecialtyType> getAllSpecialtyTypes() {
		return doctorSearchService.getAllSpecialtyType();
	}
}
