import {Component, Input, OnInit} from '@angular/core';
import {CalendarEventService} from '../../services/calendar-event.service';
import {CalendarEvent} from '../../shared/calendarEvent';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-events',
  templateUrl: './employee-events.component.html',
  styleUrls: ['./employee-events.component.css']
})

export class EmployeeEventsComponent implements OnInit {
  @Input() employeeId: number;

  dataSource: CalendarEvent[];
  displayedColumns = ['startTime', 'endTime', 'note'];
  eventsForm: FormGroup;
  start: Date = new Date();
  end: Date = new Date();

  constructor(private calendarEventService: CalendarEventService,
              private snack: MatSnackBar,
              private formBuilder: FormBuilder) {

    // One month in past
    this.start.setMonth(this.start.getMonth() - 1);
    // One month in future
    this.end.setMonth(this.end.getMonth() + 1);
    this.eventsForm = this.formBuilder.group(
      {
        pickerStart: [this.start],
        pickerEnd: [this.end]
      });
  }

  ngOnInit(): void {
    this.calendarEventService.getAllEventsByEmployeeId(this.start.toISOString(), this.end.toISOString(), this.employeeId).subscribe(
      events => {
        this.dataSource = events;
      }
    );
  }

  filter(value: any) {
    const start = 'pickerStart';
    const end = 'pickerEnd';
    const startDate: Date = value[start] as Date;
    const endDate: Date = value[end] as Date;

    if (startDate >= endDate) {
      this.snack.open('Start date before the end date', null, {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    } else {
      this.calendarEventService.getAllEventsByEmployeeId(startDate.toISOString(), endDate.toISOString(), this.employeeId).subscribe(
        events => {
          this.dataSource = events;
        });
    }
  }
}
