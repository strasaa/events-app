import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  shortcuts = [
    {route: '/main/employees/list', tooltip: 'Employees', icon: 'group'},
    {route: '/main/employees/new', tooltip: 'New employee', icon: 'person_add'},
    {route: 'calendar', tooltip: 'Calendar', icon: 'date_range'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
