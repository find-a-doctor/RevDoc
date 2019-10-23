package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.revdoc.model.Doctor;

@Repository
public interface DoctorDAO  extends JpaRepository<Doctor, Long>{
	 
	@Query(value="select Doctor.npi, Doctor.doctor_name, Doctor.phone, "
			+ "Doctor.email, Location.address, Location.city, Doctor.experience, "
			+ "GROUP_CONCAT (DISTINCT(Specialty_type.specialty_name)  SEPARATOR ' ; '), "
			+ "GROUP_CONCAT (DISTINCT(insurance_type.insurance_name)  SEPARATOR ' ; '), "
			+ "GROUP_CONCAT (DISTINCT(Condition_type.condition_name)  SEPARATOR ' ; ') "
			+ "from Doctor "
			+ "join Location on Doctor.location_location_id=Location.location_id "
			+ "join Insurance on Doctor.npi=Insurance.doctor_npi "
			+ "join insurance_type on Insurance.insurance_type_insurance_type_id = insurance_type.insurance_type_id "
			+ "join Specialty on Doctor.npi=Specialty.doctor_npi "
			+ "join Specialty_type on Specialty.specialty_type_specialty_type_id=specialty_type.specialty_type_id "
			+ "join conditions on Doctor.npi = conditions.doctor_npi "
			+ "join Condition_type on conditions.condition_type_condition_type_id = Condition_type.condition_type_id "
			+ "where (npi like :search "
			+ "or lower(doctor_name) like :search or experience like :search "
			+ "or lower(email) like :search "
			+ "or lower(phone) like :search "
			+ "or lower(Location.city) like :search "
			+ "or lower(Location.address) like :search "
			+ "or lower(insurance_type.insurance_name) like :search "
			+ "or lower(Specialty_type.specialty_name) like :search "
			+ "or lower(Condition_type.condition_name) like :search ) "
			+ "group by Doctor.npi", nativeQuery = true)
	List<Object[]> generalSearchDoctor(@Param("search") String search);
	
	
	@Query(value="select Doctor.npi, Doctor.doctor_name, Doctor.phone, "
			+ "Doctor.email, Location.address, Location.city, Doctor.experience, "
			+ "GROUP_CONCAT (DISTINCT(Specialty_type.specialty_name)  SEPARATOR ' ; '), "
			+ "GROUP_CONCAT (DISTINCT(insurance_type.insurance_name)  SEPARATOR ' ; '), "
			+ "GROUP_CONCAT (DISTINCT(Condition_type.condition_name)  SEPARATOR ' ; ') "
			+ "from Doctor "
			+ "join Location on Doctor.location_location_id=Location.location_id "
			+ "join Insurance on Doctor.npi=Insurance.doctor_npi "
			+ "join insurance_type on Insurance.insurance_type_insurance_type_id = insurance_type.insurance_type_id "
			+ "join Specialty on Doctor.npi=Specialty.doctor_npi "
			+ "join Specialty_type on Specialty.specialty_type_specialty_type_id = specialty_type.specialty_type_id "
			+ "join conditions on Doctor.npi = conditions.doctor_npi "
			+ "join Condition_type on conditions.condition_type_condition_type_id = Condition_type.condition_type_id "
			+ "group by Doctor.npi", nativeQuery = true)
	List<Object[]> findAllDoctors();
	

//used By DoctorInfoService	
	@Query("select d from Doctor d where d.npi = :npi")
	Doctor findByNpi(long npi);
	
}
