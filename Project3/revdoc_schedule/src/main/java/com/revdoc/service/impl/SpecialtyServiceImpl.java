package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.SpecialtyDAO;
import com.revdoc.model.Specialty;
import com.revdoc.service.SpecialtyService;

@Service
public class SpecialtyServiceImpl implements SpecialtyService {
	@Autowired
	private SpecialtyDAO specialtyDAO;
	public SpecialtyServiceImpl() {
		// EMPTY CONSTRUCTOR BUSINESS STANDARD
	}
	
	@Override
	public Specialty createSpecialty(Specialty specialty) {
		return specialtyDAO.save(specialty);
	}

	@Override
	public void deleteSpecialty(long specialtyId) {
		specialtyDAO.deleteById(specialtyId);	
		
	}

	@Override
	public Specialty updateSpecialty(long specialtyId, Specialty specialty) {
		return specialtyDAO.save(specialty);
	}

	@Override
	public List<Specialty> getAllSpecialties() {
		return specialtyDAO.findAll();
	}

	@Override
	public Specialty getSpecialtyByspecialtyId(long specialtyId) {
		return specialtyDAO.findBySpecialtyId(specialtyId);
	}

}
