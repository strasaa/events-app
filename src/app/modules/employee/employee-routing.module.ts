import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


export const routes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'new', component: EmployeeDetailComponent},
  {path: 'detail/:id', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule {
}
