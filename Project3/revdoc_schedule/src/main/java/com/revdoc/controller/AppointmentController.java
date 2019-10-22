package com.revdoc.controller;

// IMPORTS
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Appointment;
import com.revdoc.service.AppointmentService;

/* REST Appointment Controller - 3 exposed services for easy REST access:
 *  1. /appointments --> retrieves a list of all appointments
 *  2. /userAppointments/emailOfAssociate@email.com --> retrieves a list of appointments by email of Revature Associate
 *  3. /doctorAppointments/emailOfDoctor@email.com --> retrieves a list of appointments by email of Doctor
*/
@CrossOrigin
@RestController
public class AppointmentController {
	
	// Autowires AppointmentService for Controller to access
	@Autowired
	private AppointmentService appointmentService;

	// Exposes GET method access of a list of all appointments
	@GetMapping("/appointments")
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
	
	// Exposes GET method access of a list of all appointments registered at Revature Associate's Email
	@GetMapping("/userAppointments/{email}")
	public List<Appointment> getAppointmentByRevAssociate(@PathVariable String email) {
		return appointmentService.getAppointmentByRevAssociate(email);
	}
	
	// Exposes GET method access of a list of all appointments registered at specified Doctor's Email
	@GetMapping("/doctorAppointments/{email}")
	public List<Appointment> getAppointmentByDoctor(@PathVariable String email) {
		return appointmentService.getAppointmentByDoctor(email);
	}
	
}
