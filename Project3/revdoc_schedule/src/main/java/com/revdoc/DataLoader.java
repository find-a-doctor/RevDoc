package com.revdoc;

import java.security.MessageDigest;
import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.revdoc.dao.AppointmentDAO;
import com.revdoc.dao.AvailableDAO;
import com.revdoc.dao.ConditionTypeDAO;
import com.revdoc.dao.ConditionsDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.DoctorLicenseDAO;
import com.revdoc.dao.DoctorPostDAO;
import com.revdoc.dao.FeedbackDAO;
import com.revdoc.dao.FollowersDAO;
import com.revdoc.dao.InsuranceDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.LicenseDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.dao.RevAssociateDAO;
import com.revdoc.dao.SpecialtyDAO;
import com.revdoc.dao.SpecialtyTypeDAO;
import com.revdoc.model.Appointment;
import com.revdoc.model.Available;
import com.revdoc.model.ConditionType;
import com.revdoc.model.Conditions;
import com.revdoc.model.Doctor;
import com.revdoc.model.DoctorLicense;
import com.revdoc.model.DoctorPost;
import com.revdoc.model.Feedback;
import com.revdoc.model.Followers;
import com.revdoc.model.Insurance;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.License;
import com.revdoc.model.Location;
import com.revdoc.model.RevAssociate;
import com.revdoc.model.Specialty;
import com.revdoc.model.SpecialtyType;

import lombok.RequiredArgsConstructor;

@Component
@Transactional
public class DataLoader {

	@Autowired
	private RevAssociateDAO revAssociateDao;
	@Autowired 
	private AppointmentDAO appointmentDao;	
	@Autowired
	private AvailableDAO availableDao;
	@Autowired
	private ConditionsDAO conditionsDao;
	@Autowired
	private ConditionTypeDAO conditionTypeDao;
	@Autowired
	private DoctorDAO doctorDao;
	@Autowired
	private DoctorLicenseDAO doctorLicenseDao;
	@Autowired
	private DoctorPostDAO doctorPostDao;
	@Autowired
	private FeedbackDAO feedbackDao;
	@Autowired
	private FollowersDAO followersDao;
	@Autowired
	private InsuranceDAO insuranceDao;
	@Autowired
	private InsuranceTypeDAO insuranceTypeDao;
	@Autowired
	private LicenseDAO licenseDao;
	@Autowired
	private LocationDAO locationDao;
	@Autowired
	private SpecialtyDAO specialtyDao;
	@Autowired
	private SpecialtyTypeDAO specialtyTypeDao;
	
	



	@PostConstruct
	public void init() {
//		Time time1 = new Time(3);
//		time1.setHours(4); // use this to set the hour
//		System.out.println("Example of Time Object: "+time1); // - result is 04:00:00
		
		//CREATE REVATURE USER
		RevAssociate u1 = new RevAssociate("revTom@gmail.com", encryptPassword("revTom"), "Tom Cat");
		u1=revAssociateDao.save(u1);
		
		RevAssociate u2 = new RevAssociate("revCat@gmail.com", encryptPassword("revCat"), "Cat Tom");
		u2=revAssociateDao.save(u2);
		
		// LOCATION
		Location l1 = new Location(0, "Texas Health Care", "456 Harward", "Irving", "Texas", "75060", "Private Practice");
		l1 = locationDao.save(l1);
		
		Location l2 = new Location(0, "Baylor Scott and White", "456 Harward", "Dallas", "Texas", "04124", "Hospital");
		l2 = locationDao.save(l2);
		
		//CREATE DOCTOR
		Doctor d1 = new Doctor(0, "John Ross", 20, "johnross@gmail.com", encryptPassword("johnross"), "469-288-5555", "about John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross hereabout John Ross here", 1, l1);
		d1 = doctorDao.save(d1);
		
		Doctor d2 = new Doctor(0, "Kevin Zuul", 15, "kevinzuul@gmail.com", encryptPassword("kevinzuul"), "098-454-3215", "about Kevin Zuul here", 1, l2);
		d2 = doctorDao.save(d2);
		

		Doctor d3 = new Doctor(0, "Dr. Duckworth", 9999, "duckworth@gmail.com", encryptPassword("duckworth"), "000-000-0000", "Had a long night, Mr. Duckworth? Fail.", 1, l1);
        d3 = doctorDao.save(d3);

		//CREATE AVAILABLE
		Time start = new Time(10, 5, 0);
		Time end = new Time(10, 5, 0);
		Date date = new Date();
		Available a1 = new Available(0, d1, 2, start, end, date);
		a1 = availableDao.save(a1);
		
		start = new Time(10, 5, 0);
		end = new Time(15, 30, 0);
		date = new Date();
		date.setYear(119); //Year start at 1900 so add 119 to get the year 2019
		date.setMonth(10); // Month start at 1 so add 10 to get the month 11
		date.setDate(1); // Day, not sure, you guys fig it out :)
		Available a2 = new Available(0, d2, 3, start, end, date);
		a2 = availableDao.save(a2);
		
		// CREATE FOLLOWERS
		date = new Date();
		Followers f1 = new Followers(0, d1, u2, date);
		f1 = followersDao.save(f1);
		
		Followers f2 = new Followers(0, d2, u1, date);
		f2 =followersDao.save(f2);
		
		// CREATE APPOINTMENT
		date = new Date();
		Time time = new Time(10,30,0);
		Appointment ap1 = new Appointment(0, d1, u1, date, time, "Insurant Name input form user1", true);
		ap1=appointmentDao.save(ap1);
		
		time = new Time(14,30,0);
		Appointment ap2 = new Appointment(0, d2, u2, date, time, "Insurant Name input form user2", false);
		ap2=appointmentDao.save(ap2);
		// CREATE FEEDBACK
		Feedback fb1 = new Feedback(0, 1.5f, 2.5f, 3.0f, "comments feedback 1 here", ap1);
		fb1 = feedbackDao.save(fb1);
		
		Feedback fb2 = new Feedback(0, 2.5f, 0.5f, 2.0f, "comments feedback 2 here", ap2);
		fb2 = feedbackDao.save(fb2);
		
		// CREATE CONDITIONTYPE
		ConditionType ct1 = new ConditionType(0, "condition type 1");
		ct1 = conditionTypeDao.save(ct1);
		
		ConditionType ct2 = new ConditionType(0, "condition type 2");
		ct2 = conditionTypeDao.save(ct2);
		
		// CREATE CONDITION
		Conditions c1 = new Conditions(0, ct1, d1);
		c1 = conditionsDao.save(c1);
		
		Conditions c2 = new Conditions(0, ct2, d2);
		c2 = conditionsDao.save(c2);
		
		// CREATE INSURANCE TYPE
		InsuranceType it1 = new InsuranceType(0, "Blue Cross Blue Shield");
		it1 = insuranceTypeDao.save(it1);
		
		InsuranceType it2 = new InsuranceType(0, "Ambetter");
		it2 = insuranceTypeDao.save(it2);
		
		// CREATE INSURANCE
		Insurance i1 = new Insurance(0, d1, it1);
		i1=insuranceDao.save(i1);
		
		Insurance i2 = new Insurance(0, d2, it2);
		i2=insuranceDao.save(i2);
		
		// CREATE DOCTOR POST
		Date postDate = new Date();
		DoctorPost dp1 = new DoctorPost(0, d1, "Doctor post here", postDate);
		dp1 = doctorPostDao.save(dp1);
		
		DoctorPost dp2 = new DoctorPost(0, d2, "Doctor post here", postDate);
		dp2 = doctorPostDao.save(dp2);
		
		//CREATE LICENSE
		License ls1 = new License(0, "License name 1");
		ls1 = licenseDao.save(ls1);
		
		License ls2 = new License(0, "License name 2");
		ls2 = licenseDao.save(ls2);
		
		// CREATE DOCTOR LICENSE
		Date licenseDate = new Date();
		DoctorLicense dl1 = new DoctorLicense(0, d1, ls1, licenseDate);
		dl1 = doctorLicenseDao.save(dl1);
		
		DoctorLicense dl2 = new DoctorLicense(0, d2, ls2, licenseDate);
		dl2 = doctorLicenseDao.save(dl2);
		
		// CREATE SPECIALTY TYPE
		SpecialtyType st1 = new SpecialtyType(0, "Specialty Type 1");
		st1 = specialtyTypeDao.save(st1);
		
		SpecialtyType st2 = new SpecialtyType(0, "Specialty Type 2");
		st2 = specialtyTypeDao.save(st2);
		
		// CREATE SPECIALTY
		Specialty s1 = new Specialty(0, d1, st1);
		s1 = specialtyDao.save(s1);
		
		Specialty s2 = new Specialty(0, d2, st2);
		s2 = specialtyDao.save(s2);
		
		/////////////////// PRINTING OUT THE RESULTS //////////////////////////////////////////
		System.out.println("user 1: "+u1);
		System.out.println("user 2: "+u2);
		System.out.println("location 1: "+l1);
		System.out.println("location 2: "+l2);
		System.out.println("doctor 1: "+d1);
		System.out.println("doctor 2: "+d2);
		System.out.println("available 1: "+a1);
		System.out.println("available 2: "+a2);
		System.out.println("followers 1: "+f1);
		System.out.println("followers 2: "+f2);
		System.out.println("appointment 1: "+ap1);
		System.out.println("appointment 2: "+ap2);
		System.out.println("feedback 1: "+fb1);
		System.out.println("feedback 2: "+fb2);
		System.out.println("conditionType 1: "+ct1);
		System.out.println("conditionType 2: "+ct2);
		System.out.println("condition 1: "+c1);
		System.out.println("condition 2: "+c2);
		System.out.println("insuranceType 1: "+it1);
		System.out.println("insuranceType 2: "+it2);
		System.out.println("insurance 1: "+i1);
		System.out.println("insurance 2: "+i2);
		System.out.println("doctorPost 1: "+dp1);
		System.out.println("doctorPost 2: "+dp2);
		System.out.println("license 1: "+ls1);
		System.out.println("license 2: "+ls2);
		System.out.println("doctorLicense 1: "+dl1);
		System.out.println("doctorLicense 2: "+dl2);
		System.out.println("specialtyType 1: "+st1);
		System.out.println("specialtyType 2: "+st2);
		System.out.println("specialty 1: "+s1);
		System.out.println("specialty 2: "+s2);
		
		//CREATE APPOINTMENT
//		Appointment a1= new Appointment(0,"dddd");
//		a1=appointmentDao.save(a1);
//		System.out.println("Appointment: "+a1);
		// init code goes here

	}

	public String encryptPassword(String password) {
		StringBuffer message = new StringBuffer();

		try {
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			byte[] hash = md.digest(password.getBytes("UTF-8"));

			for (byte w : hash) {
				message.append(String.format("%02x", w));
			}

		} catch (Exception e) {
			System.out.println(e);
		}

		return message.toString();

	}
}
