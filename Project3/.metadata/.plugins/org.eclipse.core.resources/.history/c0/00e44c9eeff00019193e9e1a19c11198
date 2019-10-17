package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.LocationDAO;
import com.revdoc.model.Location;
import com.revdoc.service.AppointmentCalendarService;

@Service
public class AppointmentCalendarImpl implements AppointmentCalendarService {

	@Autowired
	private LocationDAO locationDao;
	
	@Override
	public Location getLocationById(long id) {
		return locationDao.findById(id).get();
	}

}
