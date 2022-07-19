import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
declare let M: any;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(public _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.refreshEmployeeList();
  }
  refreshEmployeeList() {
    return this._employeeService.list().subscribe((res) => {
      this._employeeService.employees = res;
    });
  }
  deleteAll() {
    if (window.confirm('Are you sure, you want to delete All Records?')) {
      this._employeeService.deleteAll().subscribe(
        (res) => {
          M.toast({ html: 'Records Deleted Successfully', classes: 'rounded' });
          this.refreshEmployeeList();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  deleteEmployee(id: string) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this._employeeService.delete(id).subscribe(
        () => {
          M.toast({ html: 'Deleted Successfully', classes: 'rounded' });
          this.refreshEmployeeList();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
