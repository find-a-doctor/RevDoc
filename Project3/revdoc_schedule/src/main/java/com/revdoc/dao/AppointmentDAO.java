package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Appointment;

@Repository
public interface AppointmentDAO extends JpaRepository<Appointment, Long>{

	List<Appointment> findAppointmentByRevAssociateRevAssociateEmailAndDoctorNpi(String email, long npi);

	List<Appointment> findByRevAssociateRevAssociateEmail(String email);
	List<Appointment> findByDoctorEmailContaining(String email);
	
	@Query(value="select * "
            + "from Appointment "
            + "join Doctor on Doctor.npi=Appointment.doctor_npi "
            + "join rev_associate on rev_associate.rev_associate_email = Appointment.rev_associate_rev_associate_email "
            + "where (lower(Appointment.rev_associate_rev_associate_email) =:search ) ", nativeQuery = true)
    List<Appointment> getAllUserAppointmentById(@Param("search") String search);
    
    @Query(value="select * "
            + "from Appointment "
            + "join Doctor on Doctor.npi=Appointment.doctor_npi "
            + "join rev_associate on rev_associate.rev_associate_email = Appointment.rev_associate_rev_associate_email "
            + "where (Appointment.doctor_npi =:search ) ", nativeQuery = true)
    List<Appointment> getAllDortorAppointmentById(@Param("search") String search);
}
