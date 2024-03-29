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

import com.revdoc.model.DoctorLicense;
import com.revdoc.service.DoctorLicenseService;

@CrossOrigin
@RestController
public class DoctorLicenseController {
	@Autowired
	private DoctorLicenseService service;
	
	// Edit Doctor Profile 
		@PostMapping("/createDoctorLicense")
		public DoctorLicense createDoctorLicense(DoctorLicense doctorLicense) {
			return service.createDoctorLicense(doctorLicense);
		}
		@DeleteMapping("/doctorLicense/{doctorLicenseId}")
		public void deleteDoctorLicense(@PathVariable long doctorLicenseId) {
			service.deleteDoctorLicense(doctorLicenseId);
		}
		@PutMapping("/doctorLicense")
		public DoctorLicense updateDoctorLicense(DoctorLicense doctorLicense) {
			return service.updateDoctorLicense (doctorLicense);
		}
		
		@GetMapping("/doctorLicenses")
		public List<DoctorLicense> getAllDoctorLicenses() {
			return service.getAllDoctorLicenses();
		}
		
		@GetMapping("/doctorLicense/{doctorLicenseId}")
		public DoctorLicense getDoctorLicenseByLicenseId(@PathVariable long doctorLicenseId) {
			return service.getDoctorByDoctorLicenseId(doctorLicenseId);
		}
}
