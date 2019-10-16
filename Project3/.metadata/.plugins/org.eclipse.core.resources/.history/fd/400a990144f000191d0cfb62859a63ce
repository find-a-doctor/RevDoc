package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.exceptions.AvailabilityException;
import com.revdoc.model.Available;
import com.revdoc.service.UpdateAvailabilityService;

//The purpose of this class is to serve as a connection between the java middle-ware and the angular by exposing the uri

@CrossOrigin
@RestController
public class UpdateAvailabilityController {
	
	@Autowired
	private UpdateAvailabilityService service;

	//return types may be updated upon pojo reception
	
	@PutMapping("/updateHours")
	public Available updateHours(@RequestBody Available time) {
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the old hours and new hours, remove the conflicting old hours,
		//and finally add in the new hours. This will likely occur in Service
		System.out.println("Inside of the Controller"+"\n"+time);
		try {
			time=service.updateHours(time);
		} catch (AvailabilityException e) {
			System.out.println(e.getMessage());
		}
		System.out.println("Inside COntroller after Service");
		return time;
	}
	
	@PutMapping("/removeHours")
	public Available removeHours(@RequestBody Available time) {
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the two time periods, removing any conflicting overlaps.
		//This will likely occur in Service.
		try {
			time=service.removeHours(time);
		} catch (AvailabilityException e) {
			System.out.println(e.getMessage());
		}
		return time;
	}
	
	@GetMapping("/getAllHours")
	public List<Available> getAllHours() {
		return service.getHours();
	}
}
