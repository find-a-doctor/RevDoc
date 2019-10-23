package com.revdoc;

import java.security.MessageDigest;
import java.sql.Time;
import java.util.Calendar;
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
		
		RevAssociate u2 = new RevAssociate("thanhtinphuynh@gmail.com", encryptPassword("revCat"), "Cat Tom");
		u2=revAssociateDao.save(u2);
		
		// LOCATION
		Location l1 = new Location(0, "Texas Health Care", "123 Harward", "Irving", "Texas", "75060", "Private Practice");
		l1 = locationDao.save(l1);
		
		Location l2 = new Location(0, "Baylor Scott and White", "456 Harward", "Dallas", "Texas", "04124", "Hospital");
		l2 = locationDao.save(l2);
		
		//CREATE DOCTOR
		Doctor d0 = new Doctor(0, "Rai Huynh", 20, "thanhtinphuynh@gmail.com", encryptPassword("raihuynh"), "469-288-1245", "about Rai Huynh here", 1, l1);
		d0 = doctorDao.save(d0);
		
		Doctor d1 = new Doctor(0, "John Ross", 20, "kha_kha2579@yahoo.com", encryptPassword("johnross"), "469-288-5555", "about John Ross here", 1, l1);
		d1 = doctorDao.save(d1);
		
		Doctor d2 = new Doctor(0, "Kevin Zuul", 15, "kevinzuul@gmail.com", encryptPassword("kevinzuul"), "098-454-3215", "about Kevin Zuul here", 1, l2);
		d2 = doctorDao.save(d2);

		Doctor d33 = new Doctor(0, "Dr. Duckworth", 9999, "duckworth@gmail.com", encryptPassword("duckworth"), "000-000-0000", "Had a long night, Mr. Duckworth? Fail.", 1, l1);
        d33 = doctorDao.save(d33);

		Doctor d3 = new Doctor(0, "Kev Uul", 13, "kevUul@gmail.com", encryptPassword("kevuul"), "469-454-3215", "about Kev Uul here", 1, l1);
		d3 = doctorDao.save(d3);
		
		Doctor d4 = new Doctor(0, "Zuul Kevin", 23, "zuulkevin@gmail.com", encryptPassword("zuulkevin"), "325-454-4672", "about Kevin Zuul here", 1, l1);
		d4 = doctorDao.save(d4);
		
		Doctor d5 = new Doctor(0, "Tom Cat", 15, "tomcat@gmail.com", encryptPassword("tomcat"), "123-454-456", "about Tom Cat here", 1, l1);
		d5 = doctorDao.save(d5);
		
		Doctor d6 = new Doctor(0, "Cat Tom", 15, "cattom@gmail.com", encryptPassword("cattom"), "098-454-4444", "about Cat Tom here", 1, l1);
		d6 = doctorDao.save(d6);
		
		Doctor d7 = new Doctor(0, "Kevin Zuu", 15, "kevinzuu@gmail.com", encryptPassword("kevinzuu"), "098-454-3216", "about Kevin Zuu here", 1, l2);
		d7 = doctorDao.save(d7);
		
		Doctor d8 = new Doctor(0, "Kevin Zu", 12, "kevinzu@gmail.com", encryptPassword("kevinzu"), "098-454-3217", "about Kevin Zu here", 1, l2);
		d8 = doctorDao.save(d8);
		
		Doctor d9 = new Doctor(0, "Kevin Z", 11, "kevinz@gmail.com", encryptPassword("kevinz"), "098-454-3218", "about Kevin Z here", 1, l2);
		d9 = doctorDao.save(d9);
		
		Doctor d10 = new Doctor(0, "Kevi Zuul", 15, "kevizuul@gmail.com", encryptPassword("kevizuul"), "098-454-3220", "about Kevi Zuul here", 1, l2);
		d10 = doctorDao.save(d10);
		
		Doctor d11 = new Doctor(0, "Kev Zuul", 15, "kevzuul@gmail.com", encryptPassword("kevzuul"), "098-454-3223", "about Kev Zuul here", 1, l2);
		d11 = doctorDao.save(d11);
		
		Doctor d12 = new Doctor(0, "Ke Zuul", 15, "kezuul@gmail.com", encryptPassword("kezuul"), "098-454-3250", "about Ke Zuul here", 1, l2);
		d12 = doctorDao.save(d12);

		//CREATE AVAILABLE
		Calendar day = Calendar.getInstance();
		day.setTime(new Date(120));
		Calendar start = Calendar.getInstance(); 
		start.setTime(new Date());
		Calendar end = Calendar.getInstance();
		end.setTime(new Date());
		Calendar date = Calendar.getInstance();
		date.setTime(new Date());
		Available a1 = new Available(0, d1, day, start, end, date);
		a1 = availableDao.save(a1);
		
//		start = new Time(10, 5, 0);
//		end = new Time(15, 30, 0);
//		date = new Date();
//		date.setYear(119); //Year start at 1900 so add 119 to get the year 2019
//		date.setMonth(10); // Month start at 1 so add 10 to get the month 11
//		date.setDate(1); // Day, not sure, you guys fig it out :)
		Available a2 = new Available(0, d2, day, start, end, date);
		a2 = availableDao.save(a2);
		
		// CREATE FOLLOWERS
//		date = new Date();
		Followers f1 = new Followers(0, d1, u2, date);
		f1 = followersDao.save(f1);
		
		Followers f2 = new Followers(0, d2, u1, date);
		f2 =followersDao.save(f2);
		
		// CREATE APPOINTMENT
//		date = new Date();
//		Time time = new Time(10,30,0);
		Calendar time = Calendar.getInstance(); 
		time.setTime(new Date());
		Appointment ap1 = new Appointment(0, d0, u1, date, time, "Ambetter", true);
		ap1=appointmentDao.save(ap1);
		
		Date date1= new Date(119,9,23,10,30);
		time.setTime(date1);
		Appointment ap2 = new Appointment(0, d1, u2, date, time, "Blue Cross Blue Shield", true);
		ap2=appointmentDao.save(ap2);
		
		date1= new Date(119,9,9,1,9);
		time.setTime(date1);
		Appointment ap3 = new Appointment(0, d1, u2, time, time, "Ambetter", true);
		ap3=appointmentDao.save(ap3);
		
		date1= new Date(119,9,25,10,30);
		time.setTime(date1);
		Appointment ap4 = new Appointment(0, d1, u2, time, time, "Blue Cross Blue Shield", false);
		ap4=appointmentDao.save(ap4);
		
		// CREATE FEEDBACK
		Feedback fb1 = new Feedback(0, 1.5f, 2.5f, true, "comments feedback 1 here", ap1);
		fb1 = feedbackDao.save(fb1);
		
		Feedback fb2 = new Feedback(0, 2.5f, 0.5f, true, "comments feedback 2 here", ap2);
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
		
		Conditions c3 = new Conditions(0, ct1, d0);
		c3 = conditionsDao.save(c3);
		
		Conditions c4 = new Conditions(0, ct2, d0);
		c4 = conditionsDao.save(c4);
		
		Conditions c5 = new Conditions(0, ct1, d3);
		c5 = conditionsDao.save(c5);
		
		Conditions c6 = new Conditions(0, ct1, d4);
		c6 = conditionsDao.save(c6);
		
		Conditions c7 = new Conditions(0, ct1, d5);
		c7 = conditionsDao.save(c7);
		
		Conditions c8 = new Conditions(0, ct1, d6);
		c8 = conditionsDao.save(c8);
		
		Conditions c9 = new Conditions(0, ct1, d7);
		c9 = conditionsDao.save(c9);
		
		Conditions c10 = new Conditions(0, ct2, d8);
		c10 = conditionsDao.save(c10);
		
		Conditions c11 = new Conditions(0, ct2, d9);
		c11 = conditionsDao.save(c11);
		
		Conditions c12 = new Conditions(0, ct2, d10);
		c12 = conditionsDao.save(c12);
		
		Conditions c13 = new Conditions(0, ct2, d11);
		c13 = conditionsDao.save(c13);
		
		Conditions c14 = new Conditions(0, ct2, d12);
		c14 = conditionsDao.save(c14);
		
		Conditions c15 = new Conditions(0, ct2, d33);
		c15 = conditionsDao.save(c15);
		// CREATE INSURANCE TYPE
		InsuranceType it1 = new InsuranceType(0, "Blue Cross Blue Shield");
		it1 = insuranceTypeDao.save(it1);
		
		InsuranceType it2 = new InsuranceType(0, "Ambetter");
		it2 = insuranceTypeDao.save(it2);
		
		InsuranceType it3 = new InsuranceType(0, "Healcare");
		it3 = insuranceTypeDao.save(it3);
		
		InsuranceType it4 = new InsuranceType(0, "Centers for Medicare and Medicaid Services");
		it4 = insuranceTypeDao.save(it4);
		
		// CREATE INSURANCE
		Insurance i1 = new Insurance(0, d1, it1);
		i1=insuranceDao.save(i1);
		
		Insurance i2 = new Insurance(0, d2, it2);
		i2=insuranceDao.save(i2);
		
		Insurance i3 = new Insurance(0, d2, it1);
		i3=insuranceDao.save(i3);
		
		Insurance i4 = new Insurance(0, d0, it1);
		i4=insuranceDao.save(i4);
		
		Insurance i5 = new Insurance(0, d0, it2);
		i5=insuranceDao.save(i5);
		Insurance i51 = new Insurance(0, d0, it3);
		i51=insuranceDao.save(i51);
		Insurance i52 = new Insurance(0, d0, it4);
		i52=insuranceDao.save(i52);
		
		Insurance i6 = new Insurance(0, d3, it2);
		i6=insuranceDao.save(i6);
		
		Insurance i7 = new Insurance(0, d4, it2);
		i7=insuranceDao.save(i7);
		
		Insurance i8 = new Insurance(0, d5, it1);
		i8=insuranceDao.save(i8);
		
		Insurance i9 = new Insurance(0, d6, it1);
		i9=insuranceDao.save(i9);
		
		Insurance i10 = new Insurance(0, d7, it1);
		i10=insuranceDao.save(i10);
		
		Insurance i11 = new Insurance(0, d8, it2);
		i11=insuranceDao.save(i11);
		
		Insurance i12 = new Insurance(0, d9, it2);
		i12=insuranceDao.save(i12);
		
		Insurance i13 = new Insurance(0, d10, it2);
		i13=insuranceDao.save(i13);
		
		Insurance i14 = new Insurance(0, d11, it2);
		i14=insuranceDao.save(i14);
		
		Insurance i15 = new Insurance(0, d12, it2);
		i15=insuranceDao.save(i15);
		
		// CREATE DOCTOR POST
//		Date postDate = new Date();
		Calendar postDate = Calendar.getInstance();
		postDate.setTime(new Date());
		
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
		
		Specialty s3 = new Specialty(0, d1, st2);
		s3 = specialtyDao.save(s3);
		
		Specialty s4 = new Specialty(0, d0, st2);
		s4 = specialtyDao.save(s4);
		
		Specialty s5 = new Specialty(0, d3, st2);
		s5 = specialtyDao.save(s5);
		
		Specialty s6 = new Specialty(0, d4, st2);
		s6 = specialtyDao.save(s6);
		
		Specialty s7 = new Specialty(0, d5, st2);
		s7 = specialtyDao.save(s7);
		
		Specialty s8 = new Specialty(0, d6, st2);
		s8 = specialtyDao.save(s8);
		
		Specialty s9 = new Specialty(0, d7, st2);
		s9 = specialtyDao.save(s9);
		
		Specialty s10 = new Specialty(0, d8, st1);
		s10 = specialtyDao.save(s10);
		
		Specialty s11 = new Specialty(0, d9, st1);
		s11 = specialtyDao.save(s11);
		
		Specialty s12 = new Specialty(0, d10, st1);
		s12 = specialtyDao.save(s12);
		
		Specialty s13 = new Specialty(0, d11, st1);
		s13 = specialtyDao.save(s13);
		
		Specialty s14 = new Specialty(0, d12, st1);
		s14 = specialtyDao.save(s14);
		
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
