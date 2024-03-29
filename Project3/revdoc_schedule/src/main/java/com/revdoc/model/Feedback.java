package com.revdoc.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.TableGenerator;

import org.springframework.stereotype.Indexed;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Indexed
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@TableGenerator(name="feedback_gen", initialValue=20000, allocationSize=1)
public class Feedback implements Serializable{

	@Id
	@GeneratedValue(generator = "feedback_gen")
	private long feedbackId;
	private float bedsideMannerRating; // ex: 1.5 is 1 hour 30 minutes
	private float waitTimeRating;
	//This is for dislike/like
	private float overallRating;
	private String comments;
	@OneToOne//(cascade = {CascadeType.ALL})
	private Appointment appointment;
}
