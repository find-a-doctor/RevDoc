package com.revdoc.service.impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revdoc.dao.AppointmentDAO;
import com.revdoc.dao.DoctorDAO;
import com.revdoc.dao.FeedbackDAO;
import com.revdoc.dao.InsuranceTypeDAO;
import com.revdoc.dao.LocationDAO;
import com.revdoc.model.Appointment;
import com.revdoc.model.Doctor;
import com.revdoc.model.InsuranceType;
import com.revdoc.model.Location;
import com.revdoc.service.AppointmentCalendarService;
@Service
public class AppointmentCalendarImpl implements AppointmentCalendarService {
    @Autowired
    private LocationDAO locationDao;
    @Autowired
    private DoctorDAO doctorDao;
    @Autowired
    private AppointmentDAO appointmentDao;
    @Autowired
    private InsuranceTypeDAO insuranceTypeDao;
    @Autowired
    private FeedbackDAO feedbackDao;
    
    @Override
    public Location getLocationById(long id) {
        return locationDao.findById(id).get();
    }
    @Override
    public Doctor getDoctorById(long id) {
        return doctorDao.findById(id).get();
    }
    @Override
    public Appointment setDoctorAppointment(Appointment appointment) {
        Appointment appointment1;
        try {
            appointment.setTime(appointment.getDate());
            appointment1 = appointmentDao.save(appointment);
        }catch(Exception e) {
            appointment1 = null;
        }
        // TODO Auto-generated method stub
        return appointment1;
    }
    @Override
    public List<InsuranceType> getInsuranceTypeByNPI(long npi) {
        // TODO Auto-generated method stub
        return insuranceTypeDao.getInsuranceTypeByNPI(npi+"");
    }
    @Override
    public List<Appointment> getAllUserAppointmentById(String revAssociateEmail) {
        return appointmentDao.getAllUserAppointmentById(revAssociateEmail.toLowerCase());
    }
    @Override
    public List<Appointment> getAllDoctorAppointmentById(long npi) {
        return appointmentDao.getAllDortorAppointmentById(npi+"");
    }
    @Override
    public void deleteDoctorAppointment(long appointmentID) {
        System.out.println("AAAAAAAppointmentID: "+ appointmentID);
        try {
        feedbackDao.deleteFeedbackByAppointmentId(appointmentID+"");
        }catch(Exception e) {
            System.out.println("EEEEEEEEEEEEEEE: "+e.getMessage());
        }    
        appointmentDao.deleteById(appointmentID);
        
    }
}
