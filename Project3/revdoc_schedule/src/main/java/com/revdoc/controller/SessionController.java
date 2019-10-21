package com.revdoc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Doctor;

@CrossOrigin
@RestController
public class SessionController {
	
	@Autowired
	HttpSession session;
	
	@PostMapping("/createSession")
	public String createSession(@RequestBody String userType, HttpServletRequest request) {
		if(userType == "DOCTOR") {
			Doctor doctor = new Doctor();
			request.getSession().setAttribute("docEmail", doctor);
		}
	}
}
