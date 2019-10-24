package com.revdoc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revdoc.dao.ConditionsDAO;
import com.revdoc.model.Conditions;
import com.revdoc.service.ConditionsService;

@Service
public class ConditionsServiceImpl implements ConditionsService {
	@Autowired
	private ConditionsDAO conditionsDAO;

	public ConditionsServiceImpl() {
		// EMPTY CONSTRUCTOR BUSINESS STANDARD
	}
	
	@Override
	public Conditions createCondition(Conditions condition) {
		return conditionsDAO.save(condition);
	}

	@Override
	public void deleteCondition(long conditionId) {
		conditionsDAO.deleteById(conditionId);	
	}

	@Override
	public List<Conditions> getAllConditions() {
		return conditionsDAO.findAll();
	}

	@Override
	public Conditions getConditionByConditionId(long conditionId) {
		return conditionsDAO.findByConditionId(conditionId);
	}

	@Override
	public Conditions updateCondition(long conditionId, Conditions condition) {
		return conditionsDAO.save(condition);
	}


	

}
