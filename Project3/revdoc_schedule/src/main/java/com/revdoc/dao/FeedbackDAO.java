package com.revdoc.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Feedback;

@Repository
public interface FeedbackDAO  extends JpaRepository<Feedback, Long>{

	@Query("select f from Feedback f where f.appointment.doctor.npi = :npi")
    List<Feedback> getAll(long npi);
	
	@Modifying
    @Transactional
    @Query(value="delete from Feedback where Feedback.appointment_appointment_id =:search", nativeQuery = true)
    void deleteFeedbackByAppointmentId(@Param("search") String search);
}
