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
//@Builder(toBuilder = true)
@Indexed
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@TableGenerator(name="condition_gen", initialValue=800000, allocationSize=1)

public class Conditions implements Serializable{

	@Id
	@GeneratedValue(generator = "condition_gen")
	private long conditionId;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private ConditionType conditionType;
	
	@ManyToOne//(cascade = {CascadeType.ALL})
	private Doctor doctor;
}
