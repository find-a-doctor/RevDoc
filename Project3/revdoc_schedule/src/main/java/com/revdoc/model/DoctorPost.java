package com.revdoc.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
@TableGenerator(name="doctorpost_gen", initialValue=1000000, allocationSize=1)
public class DoctorPost implements Serializable{

	@Id
	@GeneratedValue(generator = "doctorpost_gen")
	private long doctorPostId;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private Doctor doctor;
	private String post;
	private Calendar postDate;
}
