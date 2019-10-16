package com.revdoc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
