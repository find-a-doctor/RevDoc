package com.revdoc.model;

import java.io.Serializable;
import java.sql.Time;
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
@TableGenerator(name="doctorlicense_gen", initialValue=100000000, allocationSize=1)
public class DoctorLicense implements Serializable{

	@Id
	@GeneratedValue(generator = "doctorlicense_gen")
	private long doctorLicenseId;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private Doctor doctor;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private License license;
	private Date licenseDate;
}
