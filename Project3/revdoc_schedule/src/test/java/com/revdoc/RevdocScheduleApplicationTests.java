package com.revdoc;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.revdoc.dao.ConditionTypeDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.SpecialtyTypeDAO;
import com.revdoc.model.ConditionType;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.Location;
import com.revdoc.model.SpecialtyType;
import com.revdoc.service.impl.SearchDoctorServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RevdocScheduleApplicationTests {
	
	@Autowired
	private SearchDoctorServiceImpl searchdoctor;
	
	@MockBean
	private DoctorDAO doctorDao;
	@MockBean
	private SpecialtyTypeDAO specialtyTypeDao;
	@MockBean
	private InsuranceTypeDAO insuranceTypeDao;
	@MockBean
	private ConditionTypeDAO conditionTypeDao;

	@Test
//	public void contextLoads() {
//	}
	
	//Service Layer Method Testing

	public void getAllDoctorsTest(){
		Location l1 = new Location(10000,"Health Practictioner", "1734 Walkway","Manassas","VA", "21235","Specialist");
		Location l2 = new Location(10001,"Doctor's Office", "1891 Cherry Avenue","Little Rock","Colorado", "12389","Cardiologist");
		//List<Object> list1= doctorDao.findAllDoctors();
	
		Object[] o1 = new Doctor[2];
		Object d1 = new Doctor(1000000000, "Garat Patel",8,"gpatel1@gmail.com", "password", "2402321212","Physician", 52,l1);
		Object d2 = new Doctor(1000000001, "Siraj Patel",6,"spatel1@gmail.com", "password1", "2402321214","Physician", 22,l2);
		o1[0]=d1;
		o1[1]=d2;
		List<Object[]> list = new ArrayList<Object[]>();
		list.add(o1);

		when(doctorDao.findAllDoctors()).thenReturn(list);
		//when(doctorDao.findAllDoctors()).thenReturn(Stream.of(d1, d2).collect(Collectors.toList()));
		 assertEquals(1, searchdoctor.getAllDoctors().size());
		 assertNotEquals(2,searchdoctor.getAllDoctors().size());
		// doctorDao.
	}
	
	@Test
	public void getAllSpecialtyTypeTest() {
		SpecialtyType st1 = new SpecialtyType(0, "Lung");
		SpecialtyType st2 = new SpecialtyType(0, "Foot");
		SpecialtyType st3 = new SpecialtyType(0, "Heart");
		SpecialtyType st4 = new SpecialtyType(0, "Eyes");
		List<SpecialtyType> list = new ArrayList<SpecialtyType>();
		list.add(st1);
		list.add(st2);
		list.add(st3);
		list.add(st4);
		when(specialtyTypeDao.findAll()).thenReturn(list);
		assertEquals(4, searchdoctor.getAllSpecialtyType().size());
		assertNotEquals(7, searchdoctor.getAllSpecialtyType().size());
	}
	
	@Test
	public void getAllInsuranceTypesTest() {
		InsuranceType it1 = new InsuranceType(0, "Blue Cross Blue Shield");
		
		InsuranceType it2 = new InsuranceType(0, "Ambetter");
		
		InsuranceType it3 = new InsuranceType(0, "Healcare");
		
		InsuranceType it4 = new InsuranceType(0, "Centers for Medicare and Medicaid Services");
		List<InsuranceType> list = new ArrayList<InsuranceType>();
		list.add(it1);
		list.add(it2);
		list.add(it3);
		list.add(it4);
		
		when(insuranceTypeDao.findAll()).thenReturn(list);
		assertEquals(4, searchdoctor.getAllInsuranceType().size());
		assertNotEquals(5, searchdoctor.getAllInsuranceType().size());
		
	}
	
	@Test
	public void getAllConditionTypeTest() {
		
		ConditionType ct1 = new ConditionType(0, "Heart");
		ConditionType ct2 = new ConditionType(0, "Lungs");
		ConditionType ct3 = new ConditionType(0, "Eyes");
		ConditionType ct4 = new ConditionType(0, "Foot");
		List<ConditionType> list = new ArrayList<ConditionType>();
		list.add(ct1);
		list.add(ct2);
		list.add(ct3);
		list.add(ct4);
		when(conditionTypeDao.findAll()).thenReturn(list);
		assertEquals(4, searchdoctor.getAllConditionType().size());
		assertNotEquals(3, searchdoctor.getAllConditionType().size());
		
	}

}
