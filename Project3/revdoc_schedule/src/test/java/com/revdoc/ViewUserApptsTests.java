package com.revdoc;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;

import com.revdoc.model.Appointment;
import com.revdoc.model.RevAssociate;
import com.revdoc.service.AppointmentService;
import com.revdoc.service.impl.AppointmentServiceImpl;

public class ViewUserApptsTests {
	
	private static RevAssociate revAssociateReal;
	private static RevAssociate revAssociateFake;
	private static AppointmentServiceImpl apptService;

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		apptService = new AppointmentServiceImpl(); 
		
		revAssociateReal = new RevAssociate();
		revAssociateReal.setRevAssociateEmail("revTom@gmail.com");
		revAssociateReal.setRevAssociatePassword("revTom");
		revAssociateReal.setRevAssociateName("Tom Cat");
		
		revAssociateFake = new RevAssociate();
		revAssociateFake.setRevAssociateEmail("fakeEmail@gmail.com");
		revAssociateFake.setRevAssociatePassword("fakePassword");
		revAssociateFake.setRevAssociateName("Fake Associate");
	}

	@Test
	public void returnsUserAppointment() {
		assertNotNull(apptService.getAppointmentByRevAssociate(revAssociateReal.getRevAssociateEmail()).get(0));
	}
	
	@Test
	public void returnsNoUserAppointment() {
		assertNull(apptService.getAppointmentByRevAssociate(revAssociateReal.getRevAssociateEmail()).get(0));
	}
	

}
