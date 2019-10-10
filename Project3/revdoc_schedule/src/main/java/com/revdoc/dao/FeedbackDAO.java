package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Feedback;

public interface FeedbackDAO  extends JpaRepository<Feedback, Long>{

}
