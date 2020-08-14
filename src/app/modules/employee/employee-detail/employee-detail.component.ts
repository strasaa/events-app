import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee = {
    firstName: '',
    surname: '',
    title: ''
  };
  id: number;

  private routeSub: Subscription;
  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              private router: Router,
              private snack: MatSnackBar,
              private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      const key = 'id';
      this.id = +params[key];
    });

    this.bindFormEmployee(this.employee);
  }

  bindFormEmployee(employee: Employee): void {
    this.employeeForm = this.formBuilder.group(
      {
        title: employee.title,
        firstName: [employee.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
        surname: [employee.surname, [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      });
  }

  ngOnInit(): void {
    if (this.id) {
      this.employeeService.getEmployeeById(this.id).subscribe(
        employee => {
          this.employee = employee;
          this.bindFormEmployee(employee);
        }
      );
    }
  }

  save(value) {
    const employee: Employee = value as Employee;
    if (this.id) {
      employee.id = this.id;
    }
    this.employeeService.createEmployee(employee).toPromise().then(
      () => {
        this.snack.open('Employee is saved', null, {
          duration: 2000,
          verticalPosition: 'bottom',
          panelClass: ['snack-color-success']
        });
      }).then(() => {
      this.router.navigateByUrl('main/employees/list').then();
    });
  }

  back(): void {
    this.router.navigateByUrl('main/employees/list').then();
  }

  delete() {
    if (this.id) {
      this.employeeService.deleteEmployee(this.id).toPromise().then(
        () => {
          this.snack.open('Employee was deleted', null, {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['snack-color-success']
          });
        }).then(() => {
        this.back();
      });
    } else {
      this.back();
    }
  }
}
