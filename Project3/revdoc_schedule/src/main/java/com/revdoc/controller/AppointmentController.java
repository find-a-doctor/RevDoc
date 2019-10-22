package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;
import com.revdoc.service.AppointmentService;

@CrossOrigin
@RestController
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;

	@GetMapping("/appointments")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
	
	@GetMapping("/userAppointments/{email}")
	public List<Appointment> getAppointmentByRevAssociate(@PathVariable String email) {
		return appointmentService.getAppointmentByRevAssociate(email);
	}
	
	@GetMapping("/doctorAppointments/{email}")
	public List<Appointment> getAppointmentByDoctor(@PathVariable String email) {
		return appointmentService.getAppointmentByDoctor(email);
	}
	
}
