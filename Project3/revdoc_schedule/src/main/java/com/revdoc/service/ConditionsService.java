package com.revdoc.service;

import java.util.List;

import com.revdoc.model.Conditions;


public interface ConditionsService {
	// Edit Doctor Profile
	public Conditions createCondition(Conditions condition);
	public void deleteCondition(long conditionId);
	public Conditions updateCondition (long conditionId, Conditions condition);
	public List<Conditions> getAllConditions();
	public Conditions  getConditionByConditionId(long conditionId);
}
