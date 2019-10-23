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

import com.revdoc.model.Specialty;
import com.revdoc.service.SpecialtyService;

@CrossOrigin
@RestController
public class SpecialtyController {
	@Autowired
	private SpecialtyService service;
	
	// Edit Doctor Profile 
	@PostMapping("/createSpecialty")
	public Specialty createSpecialty(Specialty specialty) {
		return service.createSpecialty(specialty);
	}
	
	@DeleteMapping("/specialty/{specialtyId}")
	public void deleteSpecialty(@PathVariable long specialtyId) {
		service.deleteSpecialty(specialtyId);
	}
	
	@PutMapping("/specialty/{specialtyId}")
	public Specialty updateSpecialty(@PathVariable long specialtyId,
			   @RequestBody Specialty specialty) {
		return service.updateSpecialty(specialtyId, specialty);
	}
	
	@GetMapping("/specialties")
	public List<Specialty> getAllSpecialties() {
		return service.getAllSpecialties();
	}
	
	@GetMapping("/specialty/{specialtyId}")
	public Specialty getSpecialtyBySpecialtyId(@PathVariable long specialtyId) {
		return service.getSpecialtyByspecialtyId(specialtyId);
	}
}
