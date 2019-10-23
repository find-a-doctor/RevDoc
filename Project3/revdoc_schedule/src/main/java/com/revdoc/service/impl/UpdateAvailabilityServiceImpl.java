package com.revdoc.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.AvailableDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.exceptions.AvailabilityException;
import com.revdoc.model.Available;
import com.revdoc.service.UpdateAvailabilityService;

@Service
public class UpdateAvailabilityServiceImpl implements UpdateAvailabilityService  {
	
	@Autowired
	private AvailableDAO dao;
	@Autowired
	private DoctorDAO doctorDao;
	@Autowired
	private LocationDAO locationDao;

	@Override
	public Available updateHours(Available time){
		System.out.println("Inside the Service"+"\n"+time);
		
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the old hours and new hours, remove the conflicting old hours,
		//and finally add in the new hours.
		
		//Gets all entries from the Availability Table
		List<Available> masterList= dao.findAll();
		
		System.out.println("After Master List Acquired");
		
		//correct for timezone discrepancy
		time.getDay().add(Calendar.HOUR, 5);
		time.getStart().add(Calendar.HOUR, 5);
		time.getEnd().add(Calendar.HOUR, 5);
		time.getDate().add(Calendar.HOUR, 5);
		

		System.out.println("Start= "+time.getStart().getTime());
		System.out.println("End= "+time.getEnd().getTime());
		
		for(Available block: masterList) {

				if(block.getDoctor().equals(time.getDoctor())&&block.getDate().getTime().equals(time.getDate().getTime())) {

					
					//Compare values to determine overlap. To prevent overlap, Start and End must be after end
					//or Start and ENd must be before Start. If there is an overlap, delete the block.

					System.out.println((block.getStart().before(time.getStart())&&block.getEnd().before(time.getEnd())));
					System.out.println(block.getStart().after(time.getEnd())&&block.getEnd().after(time.getEnd()));
					System.out.println(!((block.getStart().before(time.getStart())&&block.getEnd().before(time.getEnd()))||(block.getStart().after(time.getEnd())&&block.getEnd().after(time.getEnd()))));
					if(!(time.getStart().after(block.getEnd())||time.getEnd().before(block.getStart()))) {
						System.out.println("Deleting Block");
						dao.delete(block);
					}
				}

		}
		
		//recorrect for timezone discrepancy
		time.getDay().add(Calendar.HOUR, -5);
		time.getStart().add(Calendar.HOUR, -5);
		time.getEnd().add(Calendar.HOUR, -5);
		time.getDate().add(Calendar.HOUR, -5);
		
		//Save the new hours
		System.out.println("Saving New Hours");
		locationDao.save(time.getDoctor().getLocation());
		doctorDao.save(time.getDoctor());
		System.out.println(time.getStart().getTime());
		dao.save(time);
		System.out.println(time.getStart().getTime());
		return time;
	}

	@Override
	public Available removeHours(Available time){
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the two time periods, removing any conflicting overlaps.
		
		SimpleDateFormat format= new SimpleDateFormat("yyyy-MM-dd");
		
		//get all entries from the Availability Table
		List<Available> masterList= dao.findAll();
		
		for(Available block: masterList) {
				if(block.getDoctor().equals(time.getDoctor())&&block.getDate().getTime().equals(time.getDate().getTime())) {

					
					//Compare values to determine overlap. To prevent overlap, Start and End must be after end
					//or Start and ENd must be before Start. If there is an overlap, delete the block.
					
					
					if(!(time.getStart().after(block.getEnd())||time.getEnd().before(block.getStart()))) {
						dao.delete(block);
					}
				}
		}
		return time;
	}

	@Override
	public List<Available> getHours() {
		return dao.findAll();
	}

}
