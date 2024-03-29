package com.revdoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revdoc.model.Conditions;
import com.revdoc.service.ConditionsService;

@CrossOrigin
@RestController
public class ConditionsController {
	@Autowired
	private ConditionsService service;
	
	// Edit Doctor Profile 
	@PostMapping("/createCondition")
	public Conditions createCondition(Conditions condition) {
		return service.createCondition(condition);
	}
	
	@DeleteMapping("/condition/{conditionId}")
	public void deleteCondition(@PathVariable long conditionId,
							@RequestBody Conditions condition) {
		service.deleteCondition(conditionId);
	}
	
	@PutMapping("/condition/{conditionId}")
	public Conditions updateCondition(@PathVariable long conditionId,
									@RequestBody Conditions condition) {
		return service.updateCondition(conditionId, condition);
	}
	
	@GetMapping("/conditions")
	public List<Conditions> getAllConditions() {
		return service.getAllConditions();
	}
	
	@GetMapping("/condition/{conditionId}")
	public Conditions getConditionsByConditionId(@PathVariable long conditionId) {
		return service.getConditionByConditionId(conditionId);
	}
	
}
