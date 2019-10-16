package com.revdoc;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.revdoc.exceptions.AvailabilityException;
import com.revdoc.model.Available;
import com.revdoc.model.Doctor;
import com.revdoc.service.UpdateAvailabilityService;
import com.revdoc.service.impl.UpdateAvailabilityServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UpdateAvailabilityTests {

	@Test
	public void updateTest() {
		UpdateAvailabilityService service= new UpdateAvailabilityServiceImpl(); 
		Available test= new Available();
		test.setAvailableId(0);
		test.setDoctor(new Doctor());
		test.getDoctor().setNpi(0);
			service.updateHours(test);
	}
	
	@Test
	public void removeTest() {
		UpdateAvailabilityService service= new UpdateAvailabilityServiceImpl();
		Available test= new Available();
		test.setAvailableId(0);
		test.setDoctor(new Doctor());
		test.getDoctor().setNpi(0);
			service.removeHours(test);
	}
}
