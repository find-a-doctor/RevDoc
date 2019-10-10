package com.revdoc.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revdoc.model.Appointment;

public interface AppointmentDAO extends JpaRepository<Appointment, Long>{

}
