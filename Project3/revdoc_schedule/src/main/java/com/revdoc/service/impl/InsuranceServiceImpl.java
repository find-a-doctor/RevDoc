package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.InsuranceDAO;
import com.revdoc.model.Insurance;
import com.revdoc.service.InsuranceService;

@Service
public class InsuranceServiceImpl implements InsuranceService {
	@Autowired
	private InsuranceDAO insuranceDAO;
	
	public InsuranceServiceImpl() {
		// EMPTY CONSTRUCTOR BUSINESS STANDARD
	}

	@Override
	public Insurance createInsurance(Insurance insurance) {
		return insuranceDAO.save(insurance);
	}

	@Override
	public void deleteInsurance(long insuranceId) {
		insuranceDAO.deleteById(insuranceId);
	}

	@Override
	public Insurance updateInsurance(Insurance insurance) {
		return insuranceDAO.save(insurance);
	}

	@Override
	public List<Insurance> getAllInsurances() {
		return insuranceDAO.findAll();
	}

	@Override
	public Insurance getInsuranceByInsuranceId(long insuranceId) {
		return insuranceDAO.findByInsuranceId(insuranceId);
	}
}
