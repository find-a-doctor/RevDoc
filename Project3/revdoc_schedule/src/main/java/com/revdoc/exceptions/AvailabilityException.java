package com.revdoc.exceptions;

public class AvailabilityException extends Exception{
	private String message;
	
	public AvailabilityException() {
		this.message="Generic Business Exception. No message given";
	}
	
	public AvailabilityException(String message) {
		this.message=message;
	}
	
	public String getMessage() {
		return this.message;
	}
	
	public void setMessage(String message) {
		this.message=message;
	}
}
