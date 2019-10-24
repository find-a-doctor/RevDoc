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
@TableGenerator(name="followers_gen", initialValue=80000, allocationSize=1)
public class Followers implements Serializable{

	@Id
	@GeneratedValue(generator = "followers_gen")
	private long followerId;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private Doctor doctor;
	@ManyToOne//(cascade = {CascadeType.ALL})
	private RevAssociate revAssociate;
	private Calendar followDate;
}
