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
//@Builder(toBuilder = true)
@Indexed
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@AllArgsConstructor
@TableGenerator(name="specialtyType_gen", initialValue=1000, allocationSize=1)

public class SpecialtyType implements Serializable{

	@Id
	@GeneratedValue(generator = "specialtyType_gen")
	private long specialtyTypeId;
	private String specialtyName;
}
