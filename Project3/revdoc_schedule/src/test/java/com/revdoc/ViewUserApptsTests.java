package com.revdoc;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.when;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
//import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.revdoc.dao.AppointmentDAO;
import com.revdoc.model.RevAssociate;
import com.revdoc.service.impl.AppointmentServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ViewUserApptsTests {
	
	static RevAssociate revAssociateReal;
	static RevAssociate revAssociateFake;
	
	@Autowired
	static AppointmentServiceImpl apptService;
	
	@MockBean
	private AppointmentDAO appointmentDao;

	@Before
	public void setUp() throws Exception {
		apptService = new AppointmentServiceImpl();
		
		revAssociateReal = new RevAssociate("revTom@gmail.com", "revTom", "Tom Cat" );
		
		revAssociateFake = new RevAssociate("fakeEmail@gmail.com", "fakePassword", "Fake Associate");
		
	}

	@Test
	public void testUserAppointment() {
		
		when(appointmentDao.findByRevAssociateRevAssociateEmail(revAssociateReal.getRevAssociateEmail()));
		
		assertNotNull(apptService.getAppointmentByRevAssociate(revAssociateReal.getRevAssociateEmail()).get(0));
	}
	
	@Test
	public void testNotUserAppointment() {
		
		when(appointmentDao.findByRevAssociateRevAssociateEmail(revAssociateFake.getRevAssociateEmail()));
		
		assertNull(apptService.getAppointmentByRevAssociate(revAssociateFake.getRevAssociateEmail()).get(0));
	}
	
	@After
	public void afterAll() {
		apptService = null;
	}	

}
