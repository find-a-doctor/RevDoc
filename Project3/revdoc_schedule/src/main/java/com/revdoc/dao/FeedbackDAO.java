package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revdoc.model.Feedback;

@Repository
public interface FeedbackDAO  extends JpaRepository<Feedback, Long>{

}
