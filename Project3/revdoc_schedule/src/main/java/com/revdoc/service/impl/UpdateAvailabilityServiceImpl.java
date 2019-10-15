package com.revdoc.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
	public Available updateHours(Available time) throws AvailabilityException {
		System.out.println("Inside the Service"+"\n"+time);
		
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the old hours and new hours, remove the conflicting old hours,
		//and finally add in the new hours.
		
		//Gets all entries from the Availability Table
		List<Available> masterList= dao.findAll();
		
		System.out.println("After Master List Acquired");
		
		SimpleDateFormat format= new SimpleDateFormat("yyyy-MM-dd");
		
		for(Available block: masterList) {
			System.out.println("Inside Iterator");
			try {
				if(block.getDoctor().equals(time.getDoctor())&&format.parseObject(block.getDate().toString()).toString().substring(0, 11).equals(time.getDate().toString().substring(0, 11))) {

					
					//Compare values to determine overlap. To prevent overlap, Start and End must be after end
					//or Start and ENd must be before Start. If there is an overlap, delete the block.
					System.out.println("Block Start= "+block.getStart());
					System.out.println("Block End= "+block.getEnd());
					System.out.println((block.getStart().before(time.getStart())&&block.getEnd().before(time.getEnd())));
					System.out.println(block.getStart().after(time.getEnd())&&block.getEnd().after(time.getEnd()));
					System.out.println(!((block.getStart().before(time.getStart())&&block.getEnd().before(time.getEnd()))||(block.getStart().after(time.getEnd())&&block.getEnd().after(time.getEnd()))));
					if(!(time.getStart().after(block.getEnd())||time.getEnd().before(block.getStart()))) {
						System.out.println("Deleting Block");
						dao.delete(block);
					}
				}
			} catch (ParseException e) {
				throw new AvailabilityException(e.getMessage()+"\n"+"From comparing Dates");
			}
		}
		
		//Save the new hours
		System.out.println("Saving New Hours");
		locationDao.save(time.getDoctor().getLocation());
		doctorDao.save(time.getDoctor());
		dao.save(time);
		return time;
	}

	@Override
	public Available removeHours(Available time) throws AvailabilityException {
		//This function needs to contain the functionality of getting the current availability on a given date,
		//checking to see if there are any overlaps in the two time periods, removing any conflicting overlaps.
		
		SimpleDateFormat format= new SimpleDateFormat("yyyy-MM-dd");
		
		//get all entries from the Availability Table
		List<Available> masterList= dao.findAll();
		
		for(Available block: masterList) {
			try {
				if(block.getDoctor().equals(time.getDoctor())&&format.parseObject(block.getDate().toString()).toString().substring(0, 11).equals(time.getDate().toString().substring(0, 11))) {

					
					//Compare values to determine overlap. To prevent overlap, Start and End must be after end
					//or Start and ENd must be before Start. If there is an overlap, delete the block.
					
					
					if(!(time.getStart().after(block.getEnd())||time.getEnd().before(block.getStart()))) {
						dao.delete(block);
					}
				}
			} catch (ParseException e) {
				throw new AvailabilityException(e.getMessage()+"\n"+"From comparing Dates");
			}
		}
		return time;
	}

	@Override
	public List<Available> getHours() {
		return dao.findAll();
	}

}
