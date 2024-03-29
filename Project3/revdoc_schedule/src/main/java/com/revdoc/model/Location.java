package com.revdoc.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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
@TableGenerator(name="location_gen", initialValue=10000, allocationSize=1)
public class Location implements Serializable{

	@Id
	@GeneratedValue(generator = "location_gen")
	private long locationId;
	
	private String locationName;
	private String address;
	private String city;
	private String state;
	private String zip;
	private String locationTypeName;
	
	
}
