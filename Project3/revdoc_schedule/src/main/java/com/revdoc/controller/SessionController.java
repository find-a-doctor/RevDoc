package com.revdoc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Doctor;
import com.revdoc.model.Location;
import com.revdoc.model.RevAssociate;

@CrossOrigin
@RestController
public class SessionController {
	
	@Autowired
	HttpSession session;
	
	@PostMapping("/doctorSession")
	public void createDocSession(@RequestBody Doctor doctor, HttpServletRequest request) {
		Location l1 = new Location(0, "Texas Health Care", "123 Harward", "Irving", "Texas", "75060", "Private Practice");
		doctor = new Doctor(1000000002, "John Ross", 20, "johnross@gmail.com","johnross", "469-288-5555", "about John Ross here", 1, l1);
		request.getSession().setAttribute("DOCTOR_USER", doctor);
		System.out.println(request.getSession().getAttribute("DOCTOR_USER"));
	}
	
	@GetMapping("/getDocSession")
	public Doctor getDocSession(HttpServletRequest request) {
		Doctor doctor = (Doctor) request.getSession().getAttribute("DOCTOR_USER");
		return doctor;
	}
	
	@PostMapping("/associateSession")
	public void createAssociateSession(@RequestBody RevAssociate associate, HttpServletRequest request) {
		associate = new RevAssociate("revTom@gmail.com", "revTom", "Tom Cat");
		request.getSession().setAttribute("ASSOCIATE_USER", associate);
		System.out.println(request.getSession().getAttribute("ASSOCIATE_USER"));
	}
	
	@GetMapping("/getAssociateSession")
	public RevAssociate getRevSession(HttpServletRequest request) {
		RevAssociate associate = (RevAssociate) request.getSession().getAttribute("ASSOCIATE_USER");
		return associate;
	}
	
	@GetMapping("/destroy")
	public void destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
		System.out.println("session invalidated");
	}
}
