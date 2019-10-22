package com.revdoc.model;

import java.io.Serializable;

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
// initialValue set for TESTING ONLY - NPI is supplied by government registration w/ 10 digits
@TableGenerator(name="doctor_gen", initialValue=1000000000, allocationSize=1)
public class Doctor implements Serializable{ 
//Doctor d = new Doctor(1000000000, "Garat Patel",8,"gpatel1@gmail.com", "password", "2402321212","Physician", 52)
	@Id
	@GeneratedValue(generator = "doctor_gen")
	private long npi;
	private String doctorName;
	private int experience;
	private String email;
	private String password;
	private String phone;
	private String aboutMe;
	private int numberOfFollowers;
	
	@OneToOne
	private Location location;
}
