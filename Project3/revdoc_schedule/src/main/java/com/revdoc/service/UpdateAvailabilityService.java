package com.revdoc.service;

import java.util.List;

import com.revdoc.exceptions.AvailabilityException;
import com.revdoc.model.Available;

public interface UpdateAvailabilityService {
	public Available updateHours(Available time) throws AvailabilityException;
	public Available removeHours(Available time) throws AvailabilityException;
	public List<Available> getHours();
}