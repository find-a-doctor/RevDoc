package com.revdoc.service;

import java.util.List;

import com.revdoc.model.DoctorLicense;

public interface DoctorLicenseService {
	// Edit Doctor Profile
	public DoctorLicense createDoctorLicense(DoctorLicense doctorLicense);
	public void deleteDoctorLicense(long doctorLicenseId);
	public DoctorLicense updateDoctorLicense (DoctorLicense doctorLicense);
	public List<DoctorLicense> getAllDoctorLicenses();
	public DoctorLicense  getDoctorByDoctorLicenseId(long doctorLicenseId);
}
