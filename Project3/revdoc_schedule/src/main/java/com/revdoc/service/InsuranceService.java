package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Insurance;

public interface InsuranceService {
	// Edit Doctor Profile
	public Insurance createInsurance(Insurance insurance);
	public void deleteInsurance(long insuranceId);
	public Insurance updateInsurance (Insurance insurance);
	public List<Insurance> getAllInsurances();
	public Insurance getInsuranceByInsuranceId(long insuranceId);
}
