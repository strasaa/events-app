import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MainComponent} from './components/main/main.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {
    path: 'main/employees',
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
