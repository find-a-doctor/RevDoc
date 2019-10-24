package com.revdoc.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.dao.DoctorDAO;
import com.revdoc.model.Doctor;
import com.revdoc.model.RevAssociate;

@CrossOrigin
@RestController
public class SessionController {

	
	private static HttpSession session;
	
	
	public HttpSession getSession() {
		return session;
	}


	@Autowired
	DoctorDAO doctorDAO;

	// Jessica is trying something
	private Doctor doctor;
	private RevAssociate associate;
	private List<Doctor> docList;
	public List<Doctor> getDocList() {
		return docList;
	}

	@PostMapping("/doctorSession")
	public void createDocSession(@RequestBody Doctor doctor, HttpServletRequest request) {
//		Location l1 = new Location(0, "Texas Health Care", "123 Harward", "Irving", "Texas", "75060",
//				"Private Practice");
////		doctor = new Doctor(0, "John Ross", 20, "johnross@gmail.com","johnross", "469-288-5555", "about John Ross here", 1, l1);
//		this.doctor = new Doctor(0, "John Smith", 20, "johnross@gmail.com", "johnross", "469-288-5555",
//				"about John Ross here", 1, l1);
		//this.doctor = doctorDAO.save(this.doctor);
		docList = doctorDAO.findAll();
		this.doctor = docList.get(0);
		session=request.getSession();
		session.setAttribute("DOCTOR_USER", this.doctor);
		System.out.println("session data "+request.getSession(false).getAttribute("DOCTOR_USER"));
	}

	@GetMapping("/getDocSession")
	public Doctor getDocSession(HttpServletRequest request) {
//		Doctor doctor = (Doctor) request.getSession().getAttribute("DOCTOR_USER");
//		return doctor;
		//System.out.println("session id "+session.getId());
		System.out.println("after refresh"+session.getId());
		System.out.println("session data for getDocSession()"+session.getAttribute("DOCTOR_USER"));
		return (Doctor)session.getAttribute("DOCTOR_USER");
	}

	@PostMapping("/associateSession")
	public void createAssociateSession(@RequestBody RevAssociate associate, HttpServletRequest request) {
//		associate = new RevAssociate("revTom@gmail.com", "revTom", "Tom Cat");
		this.associate = new RevAssociate("revTom@gmail.com", "revTom", "Tom Cat");
		request.getSession().setAttribute("ASSOCIATE_USER", associate);
		System.out.println(request.getSession().getAttribute("ASSOCIATE_USER"));
	}

	@GetMapping("/getAssociateSession")
	public RevAssociate getRevSession(HttpServletRequest request) {
//		RevAssociate associate = (RevAssociate) request.getSession().getAttribute("ASSOCIATE_USER");
		System.out.println("associate:" + this.associate);
//		return associate;
		return this.associate;
	}

	
	@GetMapping("/destroy")
	public void destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
//		this.doctor = null;
//		this.associate = null;
		System.out.println("session invalidated");
	}
}
