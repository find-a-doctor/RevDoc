package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.Location;
import com.revdoc.service.AppointmentCalendarService;

@CrossOrigin
@RestController
public class AppointmentCalendarController {

	@Autowired
	private AppointmentCalendarService appointmentCalendarService;
	
	@GetMapping("/location/{id}")
	public Location getLocationById(@PathVariable long id) {
		System.out.println("Location by Id= "+id);
		Location location = appointmentCalendarService.getLocationById(id);
		System.out.println("test: "+location);
		return location;
	}
	
	@GetMapping("/doctor/{id}")
	public Doctor getDoctorById(@PathVariable long id) {
		System.out.println("Doctor by Id= "+id);
		Doctor doctor = appointmentCalendarService.getDoctorById(id);
		System.out.println("test: "+doctor);
		return doctor;
	}
	
	@PostMapping("/doctorAppointment")
	public Appointment doctorAppointment(@RequestBody Appointment appointment) {
		return appointmentCalendarService.setDoctorAppointment(appointment);
	}
	
	@GetMapping("/insuranceTypeByNPI/{id}")
	public List<InsuranceType> getInsuranceTypeByNPI(@PathVariable long id) {
		System.out.println("getInsuranceTypeByNPI by Id= "+id);
		List<InsuranceType> it = appointmentCalendarService.getInsuranceTypeByNPI(id);
		System.out.println("test: "+it);
		return it;
	}
	
	@GetMapping("/doctorAppointmentByNPI/{id}")
	public List<Appointment> getAllDoctorAppointmentById(@PathVariable long id) {
		System.out.println("getAllDoctorAppointmentById by Id= "+id);
		List<Appointment> it = appointmentCalendarService.getAllDoctorAppointmentById(id);
	//	System.out.println("test: "+it);
		return it;
	}
	
	@GetMapping("/userAppointmentById/{id}")
	public List<Appointment> getAllUserAppointmentById(@PathVariable String id) {
		System.out.println("getAllUserAppointmentById by Id= "+id);
		List<Appointment> it = appointmentCalendarService.getAllUserAppointmentById(id);
		System.out.println("test: "+it);
		return it;
	}
	
}
