package com.revdoc.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revdoc.model.Doctor;
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
		return doctorSearchService.getAllDoctors();
	}
}
