package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.DoctorLicenseDAO;
import com.revdoc.model.DoctorLicense;
import com.revdoc.service.DoctorLicenseService;

@Service
public class DoctorLicenseServiceImpl implements DoctorLicenseService {
	@Autowired
	private DoctorLicenseDAO doctorLicenseDAO;
	
	public DoctorLicenseServiceImpl() {
		// EMPTY CONSTRUCTOR BUSINESS STANDARD
	}
	
	
	@Override
	public DoctorLicense createDoctorLicense(DoctorLicense doctorLicense) {
		return doctorLicenseDAO.save(doctorLicense);
	}

	@Override
	public void deleteDoctorLicense(long doctorLicenseId) {
		doctorLicenseDAO.deleteById(doctorLicenseId);
		
	}

	@Override
	public DoctorLicense updateDoctorLicense(DoctorLicense doctorLicense) {
		return doctorLicenseDAO.save(doctorLicense);
	}
	
	@Override
	public DoctorLicense getDoctorByDoctorLicenseId(long doctorLicenseId) {
		return doctorLicenseDAO.findByDoctorLicenseId(doctorLicenseId);
	}

	@Override
	public List<DoctorLicense> getAllDoctorLicenses() {
		return doctorLicenseDAO.findAll();
	}

}
