package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Specialty;


public interface SpecialtyService {
	// Edit Doctor Profile
	public Specialty createSpecialty(Specialty specialty);
	public void deleteSpecialty(long specialtyId);
	public Specialty updateSpecialty(long specialtyId, Specialty specialty);
	public List<Specialty> getAllSpecialties();
	public Specialty getSpecialtyByspecialtyId(long specialtyId);
}
