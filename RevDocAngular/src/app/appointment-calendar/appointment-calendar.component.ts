import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { DoctorInfoService } from '../doctor-info.service';
import { Location } from '../revdoc-classes/location';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../revdoc-classes/doctor';
import { InsuranceType } from '../revdoc-classes/insurance-type';
//import { $ } from './selenium-webdriver/lib/test/data/js';
//import $ = require("jquery");

@Component({
    selector: 'appointment-calendar',
    templateUrl: './appointment-calendar.component.html',
    styleUrls: ['./appointment-calendar.component.css']
})
export class AppointmentCalendarComponent implements OnInit, AfterViewInit {

    @ViewChild('schedulerReference', { static: false }) scheduler: jqxSchedulerComponent;
    //   @ViewChild('myLog', {static: false}) myLog: ElementRef;

    id: number;
  //  location: Location;
    doctor: Doctor;
    insuranceTypeList: InsuranceType[];
    isViewAllAppointment: boolean;
    //This for get URI from url:
    private sub: any;

    constructor(private appointmentCalendarService: DoctorInfoService, private route: ActivatedRoute, private router: Router) {
        //GET location information by ID
        //   this.sub = this.route.params.subscribe(params => {
        //     this.id = params['id']; // +params['id'];  (+) converts string 'id' to a number
        //   });
        // this.id = 10001;
    //    this.location = new Location();
        this.doctor = new Doctor();
        this.isViewAllAppointment = false;
        // this.appointmentCalendarService.getLocationById(this.id).subscribe(data => {
        //     console.log("Test Location: " + data.address);
        //     this.location = data;
        //     console.log("Test Location: " + this.location.locationName);
        // });
        // console.log("Print Location of doctor: " + this.location.locationName + " -- " + this.location.address);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // +params['id'];  (+) converts string 'id' to a number
            if(this.id == undefined || this.id == null || this.id+"" == 'NaN' || this.id < 1000000001){
                this.id = 1000000001; // set the default doctor for exception
                this.isViewAllAppointment = true;
            }
            console.log("Test doctor ID = "+this.id);
            //   this.location = new Location();
        //     this.appointmentCalendarService.getLocationById(this.id).subscribe(data => {
        //     //    console.log("Test Location: " + data.address);
        //         this.location = data;
        //    //     console.log("Test Location: " + this.location.locationName);
        //     });
            this.appointmentCalendarService.getDoctorById(this.id).subscribe(data =>{
                this.doctor = data;
            });
            this.appointmentCalendarService.getInsuranceTypeByNpi(this.id).subscribe(data =>{
                this.insuranceTypeList = data;
            });
        });
       

        
    }

    ngAfterViewInit(): void {
        this.scheduler.ensureAppointmentVisible('id1');
        this.scheduler.beginAppointmentsUpdate();
        this.scheduler.setAppointmentProperty('id1', 'resizable', false);
        this.scheduler.setAppointmentProperty('id2', 'draggable', false);
        this.scheduler.setAppointmentProperty('id3', 'resizable', false);
        this.scheduler.setAppointmentProperty('id3', 'draggable', false);
        this.scheduler.setAppointmentProperty('id4', 'readOnly', true);
        this.scheduler.setAppointmentProperty('id5', 'hidden', true);
        this.scheduler.setAppointmentProperty('id6', 'hidden', true);
        this.scheduler.endAppointmentsUpdate();
    }

    getWidth(): any {
        if (document.body.offsetWidth < 1366) {
            return '90%';
        }

        return 1366;
    }

    // This will store the available table from db to show on appointment calendar
    generateAppointments(): any {

        let appointments = new Array();
        let appointment1 = {
            id: "id1",
            description: "George brings projector for presentations.",
            location: "",
            subject: "Quarterly Project Review Meeting",
            calendar: "Room 1",
            start: new Date(2018, 10, 23, 9, 0, 0),
            end: new Date(2018, 10, 23, 16, 0, 0)
        };
        let appointment2 = {
            id: "id2",
            description: "",
            location: "",
            subject: "IT Group Mtg.",
            calendar: "Room 2",
            start: new Date(2018, 10, 24, 10, 0, 0),
            end: new Date(2018, 10, 24, 15, 0, 0)
        };
        let appointment3 = {
            id: "id3",
            description: "",
            location: "",
            subject: "Course Social Media",
            calendar: "Room 3",
            start: new Date(2018, 10, 27, 11, 0, 0),
            end: new Date(2018, 10, 27, 13, 0, 0)
        };
        let appointment4 = {
            id: "id4",
            description: "",
            location: "",
            subject: "New Projects Planning",
            calendar: "Room 2",
            start: new Date(2018, 10, 23, 16, 0, 0),
            end: new Date(2018, 10, 23, 18, 0, 0)
        };
        let appointment5 = {
            id: "id5",
            description: "",
            location: "",
            subject: "Interview with James",
            calendar: "Room 1",
            start: new Date(2018, 10, 25, 15, 0, 0),
            end: new Date(2018, 10, 25, 17, 0, 0)
        };
        let appointment6 = {
            id: "id6",
            description: "",
            location: "",
            subject: "Interview with Nancy",
            calendar: "Room 4",
            start: new Date(2018, 10, 26, 14, 0, 0),
            end: new Date(2018, 10, 26, 16, 0, 0)
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        appointments.forEach(
            i => {
                console.log("Test: " + i.id);
            }
        );


        return appointments;
    };

    source: any =
        {
            dataType: "array",
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
            localData: this.generateAppointments()
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    //Set default date of calendar when appointment page load
    date: any = new jqx.date(2018, 11, 23);

    appointmentDataFields: any =
        {
            from: "start",
            to: "end",
            id: "id",
            description: "description",
            location: "location",
            subject: "subject",
            resourceId: "calendar"
        };

    resources: any =
        {
            colorScheme: "scheme05",
            dataField: "calendar",
            source: new jqx.dataAdapter(this.source)
        };

    views: any[] =
        [
            // { type: 'dayView', showWeekends: false },
            // { type: 'weekView', showWeekends: false },
            { type: 'dayView', showWeekends: true },
            { type: 'weekView', showWeekends: true },
            { type: 'monthView' },
            { type: 'agendaView' }
        ];

    pdfExportClick(): void {
        this.scheduler.exportData('pdf');
    };

    printButton: any = null;
    insuranceComboBox: any = null;
    // called when the dialog is craeted.
    editDialogCreate = (dialog, fields, editAppointment) => {

        // hide status option
        fields.statusContainer.remove();
        // hide timeZone option
        fields.timeZoneContainer.remove();
        // hide color option
        fields.colorContainer.remove();
        // hide repeat
        fields.repeatLabel.remove();
        fields.repeat.remove();
        //  fields.repeatContainer.hide(); 
        // hide to day
        fields.toLabel.hide();
        fields.to.hide();
        // hide All day checkbox
        fields.allDay.val(false);
        fields.allDayContainer.remove();

        //   fields.location.disables();
        //fields..hide();

        fields.subjectLabel.html("Doctor Name");
        fields.subject.val(this.doctor.doctorName);
      
        fields.subject.prop("readonly",true);
      //  fields.subject.setOptions({ disabled: false });
        //fields.subject. ="Name of doctor here";
        fields.locationLabel.html("Location");
        fields.location.val(this.doctor.location.locationName );
      //  fields.location.val(this.location.locationName);
        fields.location.prop("readonly",true);
        fields.fromLabel.html("Date");
        fields.descriptionLabel.html("Address");
        fields.description.val(this.doctor.location.address);
        fields.description.prop("readonly",true);
        //   fields.al
        console.log("Print Location of doctor: " + this.doctor.location.locationName + " -- " + this.doctor.location.address);

        
        // Create Insurance ComboBox
        // let comboBoxElement = document.createElement("SELECT");
        // let insuranceComboBox: jqwidgets.jqxComboBox = jqwidgets.createInstance('#insuranceComboBox','jqxComboBox',{
        //     width: 100,
        //     height: 25
        // });
        let behandlungContainer = "<div>";
behandlungContainer += "<div class='jqx-scheduler-edit-dialog-label'>Insurance</div>";
behandlungContainer += "<div class='jqx-scheduler-edit-dialog-field'><div id='behandlung1'></div></div>";
behandlungContainer += "</div>";
fields.resourceContainer.append(behandlungContainer);

var source = ['Others'];
this.insuranceTypeList.forEach(i=>{
 //   console.log(i.insuranceName+" -- "+ i.insuranceTypeId)
    source.push(i.insuranceName);
});

$("#behandlung1").jqxComboBox({ source: source, selectedIndex: 0, width: '300px', height: '25px'});

        fields.resourceLabel.html("Calendar");

        //Create Print button
        let buttonElement = document.createElement("BUTTON");
        buttonElement.innerText = 'Print';
        buttonElement.style.cssFloat = 'right';
        buttonElement.style.marginLeft = '5px';
        buttonElement.id = 'PrintButton';
        fields.buttons[0].appendChild(buttonElement);
        let printButton: jqwidgets.jqxButton = jqwidgets.createInstance('#PrintButton', 'jqxButton', {
            width: 50,
            height: 25
        });
        this.printButton = printButton;
        printButton.addEventHandler('click', function () {
            let appointment = editAppointment;
            if (!appointment && printButton.disabled) {
                return;
            }
            let appointmentContent =
                "<table class='printTable'>" +
                "<tr>" +
                "<td class='label'>Doctor Name</td>" +
                "<td>" + fields.subject.val() + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class='label'>Date</td>" +
                "<td>" + fields.from.val() + "</td>" +
                "</tr>" +               
                "<tr>" +
                "<td class='label'>Location Name</td>" +
                "<td>" + fields.location.val() + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class='label'>Address</td>" +
                "<td>" + fields.description.val() + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td class='label'>Calendar</td>" +
                "<td>" + fields.resource.val() + "</td>" +
                "</tr>"
                + "</table>";
            let newWindow = window.open('', '', 'width=800, height=600'),
                document = newWindow.document.open(),
                pageContent =
                    '<!DOCTYPE html>\n' +
                    '<html>\n' +
                    '<head>\n' +
                    '<meta charset="utf-8" />\n' +
                    '<title>RevDoc Scheduler</title>\n' +
                    '<style>\n' +
                    '.printTable {\n' +
                    'border-color: #aaa;\n' +
                    '}\n' +
                    '.printTable .label {\n' +
                    'font-weight: bold;\n' +
                    '}\n' +
                    '.printTable td{\n' +
                    'padding: 4px 3px;\n' +
                    'border: 1px solid #DDD;\n' +
                    'vertical-align: top;\n' +
                    '}\n' +
                    '</style>' +
                    '</head>\n' +
                    '<body>\n' + appointmentContent + '\n</body>\n</html>';
            try {
                document.write(pageContent);
                document.close();
            }
            catch (error) {
            }
            newWindow.print();
        });

    };
    /**
    * called when the dialog is opened. Returning true as a result disables the built-in handler.
    * @param {Object} dialog - jqxWindow's jQuery object.
    * @param {Object} fields - Object with all widgets inside the dialog.
    * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
    */
    editDialogOpen = (dialog, fields, editAppointment) => {
        console.log("Dialog open here");
      
     
      //  (fields.calendar[0]).jqxComboBox('selectIndex', 2);
           
        // fields.subjectLabel.html("Doctor Name");
      //  fields.subject.val("Doctor name here");
      //  fields.subject.setOptions({ disabled: false });
        
        // fields.locationLabel.html("Location");
       //  fields.location.val(this.location.locationName);
        // fields.descriptionLabel.html("Address");
        // fields.description.val(this.location.address);
        if (!editAppointment && this.printButton) {
          //  fields.subject.setAppointmentProperty({val: "aaaaaaaa"});
            this.printButton.setOptions({ disabled: true });
        }
        else if (editAppointment && this.printButton) {
            this.printButton.setOptions({ disabled: false });
            if(this.isViewAllAppointment){
                console.log("isviewall appointment test: "+ this.isViewAllAppointment);
                fields.saveButton.jqxButton({ disabled: false });
            }
        }
    };
    /**
    * called when the dialog is closed.
    * @param {Object} dialog - jqxWindow's jQuery object.
    * @param {Object} fields - Object with all widgets inside the dialog.
    * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
    */
    editDialogClose = (dialog, fields, editAppointment) => {
        console.log("Appointment close here: Date = "+fields.from.val());
    //   if(editAppointment){
    //     window.location.reload();
    //   }
        // this.editDialogCreate.
    //        window.location.reload();
    //     fields.subjectLabel.html("Doctor Name");
    //     fields.subject.val("Doctor name here");
    //   //  fields.subject.setOptions({ disabled: false });
    //     //fields.subject. ="Name of doctor here";
    //     fields.locationLabel.html("Location");
    //     fields.location.val(this.location.locationName);
    //     fields.descriptionLabel.html("Address");
    //     fields.description.val(this.location.address);
    };
    /**
    * called when a key is pressed while the dialog is on focus. Returning true or false as a result disables the built-in keyDown handler.
    * @param {Object} dialog - jqxWindow's jQuery object.
    * @param {Object} fields - Object with all widgets inside the dialog.
    * @param {Object} the selected appointment instance or NULL when the dialog is opened from cells selection.
    * @param {jQuery.Event Object} the keyDown event.
    */
    editDialogKeyDown = (dialog, fields, editAppointment, event) => {
    };

    ready = (): void => {
        this.scheduler.scrollTop(700);
    }
    mySchedulerOnAppointmentDelete(event: any): void {
        let appointment = event.args.appointment;
        // this.myLog.nativeElement.innerHTML = 'appointmentDelete is raised';
        console.log('appointmentDelete is raised');
    };
    mySchedulerOnAppointmentAdd(event: any): void {
        let appointment = event.args.appointment;
        // this.myLog.nativeElement.innerHTML = 'appointmentAdd is raised';
        console.log('appointmentAdd is raised');
     
    };
    // mySchedulerOnAppointmentDoubleClick(event: any): void {
    //     let appointment = event.args.appointment;
    //    // this.myLog.nativeElement.innerHTML = 'appointmentDoubleClick is raised';
    //    console.log('appointmentDoubleClick is raised');
    // };
    mySchedulerOnAppointmentChange(event: any): void {
        let appointment = event.args.appointment;
        // this.myLog.nativeElement.innerHTML = 'appointmentChange is raised';
        console.log('appointmentChange description is raised ' + appointment.description);
        console.log('appointmentChange location is raised ' + appointment.location);
        console.log('appointmentChange Start is raised ' + appointment.from);
        console.log('appointmentChange End is raised ' + appointment.to);
        
        console.log("Appointment close here: Calendar = "+appointment.calendar);
    };
    mySchedulerOnCellClick(event: any): void {
        let cell = event.args.cell;
    //    this.setDefaults;
      //  fields.subject.val("Doctor name here");
        // this.myLog.nativeElement.innerHTML = 'cellClick is raised';
        console.log('cellClick is raised');
       // this.editDialogCreate.call;
    };

    // setDefaults(fields):void{
    //     console.log('dgfdfgdgf')
    //     fields.subject.val("Doctor name here");
    // }
}
