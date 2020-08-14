import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeRoutingModule} from './employee-routing.module';
import {MaterialModule} from '../../material.module';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import { EmployeeEventsComponent } from './employee-events/employee-events.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent, EmployeeEventsComponent],
  providers: [],
  imports: [
    CommonModule,
    MaterialModule,
    EmployeeRoutingModule
  ]
})

export class EmployeeModule {
}
