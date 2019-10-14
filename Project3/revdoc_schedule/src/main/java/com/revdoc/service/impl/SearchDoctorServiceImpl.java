package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.ConditionTypeDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.SpecialtyTypeDAO;
import com.revdoc.model.ConditionType;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.SpecialtyType;
import com.revdoc.service.SearchDoctorService;

@Service
public class SearchDoctorServiceImpl implements SearchDoctorService{

	@Autowired
	private DoctorDAO doctorDao;
	@Autowired
	private SpecialtyTypeDAO specialtyTypeDao;
	@Autowired
	private InsuranceTypeDAO insuranceTypeDao;
	@Autowired
	private ConditionTypeDAO conditionTypeDao;
	
	@Override
	public List<Object[]> doctorSearch(String search) {
		// TODO Auto-generated method stub
		return doctorDao.generalSearchDoctor("%"+search.toLowerCase()+"%");
	}
	
	@Override
	public List<Object[]> getAllDoctors() {
		// TODO Auto-generated method stub
	//	return filterSearchDoctor(doctorDao.findAllDoctors());
		return doctorDao.findAllDoctors();
	}	

	@Override
	public List<SpecialtyType> getAllSpecialtyType() {
		// TODO Auto-generated method stub
		return specialtyTypeDao.findAll();
	}

	@Override
	public List<InsuranceType> getAllInsuranceType() {
		// TODO Auto-generated method stub
		return insuranceTypeDao.findAll();
	}

	@Override
	public List<ConditionType> getAllConditionType() {
		// TODO Auto-generated method stub
		return conditionTypeDao.findAll();
	}

}
