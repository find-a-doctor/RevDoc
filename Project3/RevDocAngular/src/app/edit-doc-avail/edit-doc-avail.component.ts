import { Component, OnInit, OnChanges } from '@angular/core';
import { Available, AvailableInput } from './available';
import { AvailableService } from './availble.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-availability',
  templateUrl: './edit-availability.component.html',
  styleUrls: ['./edit-availability.component.css']
})
export class EditAvailabilityComponent implements OnInit {

  //Availability Input serves as an interim object to recieve input from the form.
  //Availability is the actual object that will be sent via the service
  availabilityInput: AvailableInput;
  availability: Available;

  form: FormGroup;

  method: string;

  valid: boolean;

  // constructor used to populate initial values and prevent undefinded issues
  constructor(private service:AvailableService) {
    this.availabilityInput= new AvailableInput();
    this.availabilityInput.date=null;
    this.availability= new Available();
    this.availability.date=null;
    this.valid=false;
    
  }

  ngOnInit() {
    
  }

  // validation methad called upon change of the fields in the html
  validate(){
    // case for when the date is not set
    // represents the case where the doctor wishes to institute a recurring change
    if(this.availabilityInput.date==null){
      if(this.availability.day!=null){
        // checks that end time is after start time
        if(this.availabilityInput.start<this.availabilityInput.end){
          this.availability.start=this.availabilityInput.start.toString();
          this.availability.end=this.availabilityInput.end.toString();
          this.valid=true;
        }
      }
    } // case for when the date is input
    else if(this.availabilityInput.date!=null){
      console.log(this.availabilityInput.date);
      this.availability.day=null;
      //Sotring the value as a string to send to the server-side
      //Trying to circumnavigate needing to build a Calendar object
      this.availability.date=this.availabilityInput.date.toString();
      // validates that end is after start
      if(this.availabilityInput.start<this.availabilityInput.end){
        this.availability.start=this.availabilityInput.start.toString();
        this.availability.end=this.availabilityInput.end.toString();
        this.valid=true;
      }
    }
    console.log(this.valid);
    return false;
  }

  //Gets called on submit
  //sends to the database based on method
  //Can be called with no method given, in which case no request is sent
  setAvailability(){
    console.log("After Submit");
    console.log(this.method);
    if(this.method=="update"){
      console.log("update");
      this.service.update(this.availability);
    }
    else if(this.method=="remove"){
      console.log("remove");
      this.service.remove(this.availability);
    }
  }

}
