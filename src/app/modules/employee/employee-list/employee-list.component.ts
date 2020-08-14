import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dataSource: Employee[];
  displayedColumns = ['title', 'firstName', 'surname'];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      employees => {
        this.dataSource = employees;
      }
    );
  }

  detail(id: number): void {
    this.router.navigateByUrl('/main/employees/detail/' + id).finally();
  }
}
