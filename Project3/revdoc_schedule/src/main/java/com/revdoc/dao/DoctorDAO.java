package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Doctor;

@Repository
public interface DoctorDAO  extends JpaRepository<Doctor, Long>{
	@Query("select d from Doctor d where d.npi = :npi")
	Doctor findByNpi(long npi);
	
	@Modifying
	@Query("delete Doctor d  where d.npi = :npi")
	Doctor deleteByNpi(long npi);
	
	@Query(value="select Doctor.npi, Doctor.doctor_name, Doctor.experience, Doctor.email, Doctor.password, "
			+ "Doctor.phone, Doctor.about_me, Doctor.number_of_followers, Location.location_id, "
            + "Location.location_name, Location.address, "
			+ "Location.city, Location.state, Location.zip, Location.location_type_name,  "
            + "License.license_id, License.license_name, Doctor_license.doctor_license_id, "
			+ "Doctor_license.license_date, Specialty_type.specialty_type_id, "
            + "Specialty_type.specialty_name, Specialty.specialty_id, Condition_type.condition_type_id, "
            + "Condition_type.condition_name, Conditions.condition_id, "
            + "Insurance_type.insurance_type_id, Insurance_type.insurance_name, Insurance.insurance_id "
            + "from Doctor "
            + "join Location on Doctor.location_location_id=Location.location_id "
            + "join doctor_license on Doctor.npi = doctor_license.doctor_npi "
        	+ "join License on doctor_license.license_license_id = License.license_id "
            + "join Insurance on Doctor.npi=Insurance.doctor_npi "
            + "join insurance_type on Insurance.insurance_type_insurance_type_id = insurance_type.insurance_type_id "
            + "join Specialty on Doctor.npi=Specialty.doctor_npi "
            + "join Specialty_type on Specialty.specialty_type_specialty_type_id=specialty_type.specialty_type_id "
            + "join conditions on Doctor.npi = conditions.doctor_npi "
            + "join Condition_type on conditions.condition_type_condition_type_id = Condition_type.condition_type_id "
            + "where (npi like :npi) "
            + "group by Doctor.npi", nativeQuery = true)
    List<Object[]> findDoctorProfileByNpi(long npi);	   
}
