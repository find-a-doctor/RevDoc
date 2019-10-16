package com.revdoc.model;

import java.io.Serializable;
import java.sql.Time;
import java.util.Calendar;
import java.util.Date;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.TableGenerator;

import org.springframework.stereotype.Indexed;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
//@Builder(toBuilder = true)
@Indexed
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@TableGenerator(name="appointment_gen", initialValue=10000000, allocationSize=1)
public class Appointment implements Serializable{

	@Id
	@GeneratedValue(generator="appointment_gen")
	private long appointmentId;
	
	@ManyToOne
	private Doctor doctor;
	@ManyToOne
	private RevAssociate revAssociate;
	private Calendar date;
	private Calendar time;
	private String insurance;
	private boolean confirmed;
	

	
}
