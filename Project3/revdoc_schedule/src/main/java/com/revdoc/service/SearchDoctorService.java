package com.revdoc.service;

import java.util.List;

import com.revdoc.model.ConditionType;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.SpecialtyType;

public interface SearchDoctorService {

	public List<Object[]> doctorSearch(String search);
	public List<Object[]> getAllDoctors();
	public List<SpecialtyType> getAllSpecialtyType();
	public List<InsuranceType> getAllInsuranceType();
	public List<ConditionType> getAllConditionType();
}
