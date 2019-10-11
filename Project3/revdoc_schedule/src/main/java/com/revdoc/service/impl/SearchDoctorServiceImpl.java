package com.revdoc.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.DoctorDAO;
import com.revdoc.model.Doctor;
import com.revdoc.service.SearchDoctorService;

@Service
public class SearchDoctorServiceImpl implements SearchDoctorService{

	@Autowired
	private DoctorDAO doctorDao;
	@Override
	public List<Object[]> doctorSearch(String search) {
		// TODO Auto-generated method stub
		return doctorDao.generalSearchDoctor("%"+search.toLowerCase()+"%");
	}
	
	@Override
	public List<Object[]> getAllDoctors() {
		// TODO Auto-generated method stub
	//	return filterSearchDoctor(doctorDao.findAllDoctors());
		return doctorDao.findAllDoctors();
	}
	
	public List<Object[]> filterSearchDoctor(List<Object[]> searchDoctor){
		List<Object[]> filter = new ArrayList<>();
		
		searchDoctor.forEach(o1->{
			
			searchDoctor.forEach(o2->{
				System.out.println(o2[1]);
				int count =0;
				if(o1[0].equals(o2[0])) {
					if(!o1[7].equals(o2[7])) {
						count++;
						o1[7]+=", "+ o2[7];
					}
					if(!o1[8].equals(o2[8])) {
						count++;
						o1[8]+=", "+o2[8];
					}
					if(count!=0) {
						System.out.println("Remove: "+o2[1]);
						o2[1]="00";
					}
				
				}
			});
		});

		searchDoctor.forEach(o->{
			if(!o[1].equals("00")) {
				filter.add(o);
			}
		});
		
//		for(int i=0; i<searchDoctor.size(); i++) {
//			int count =0;
//			for(int j=i;j<searchDoctor.size();j++) {
//				searchDoctor.
//				if(searchDoctor[i][0].equals(searchDoctor[j][0])) {
//					count++;
//				}
//				if(count>1) {
//					
//					if(o1.[7] == o2[7]) {
//						
//					}
//					
//				}
//			}
//		}

		
		return filter;
	}

}