package com.revdoc.model;

import java.io.Serializable;
import java.sql.Time;
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
@TableGenerator(name="available_gen", initialValue=70000, allocationSize=1)
public class Available implements Serializable {

	@Id
	@GeneratedValue(generator="available_gen")
	private long availableId;
	
	@ManyToOne
	private Doctor doctor;
	private Calendar day;
	private Calendar start;
	private Calendar end;
	private Calendar date;
}
