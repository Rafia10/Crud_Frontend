import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
declare let M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  @Input() employeeDetails = {
    name: '',
    email: '',
    position: '',
    office: '',
  };
  constructor(public _employeeService: EmployeeService, public route: Router) {}

  ngOnInit(): void {}

  addEmployee(dataEmployee: any) {
    this._employeeService
      .createEmployee(this.employeeDetails)

      .subscribe((res) => {
        M.toast({ html: 'Saved Successfully', classes: 'rounded' });

        this.route.navigateByUrl('/list');
        console.log(res);
      });

    this.employeeDetails = {
      name: '',
      position: '',
      office: '',

      email: '',
    };
  }
}
