package com.revdoc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Feedback;

@Repository
public interface FeedbackDAO  extends JpaRepository<Feedback, Long>{

	
	@Query("select f from Feedback f where f.appointment.doctor.npi = :npi")
	List<Feedback> getAll(long npi);

}
