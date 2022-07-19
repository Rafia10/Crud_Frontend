import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
declare let M: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id = this.route.snapshot.params['id'];

  employeeData: any = {};
  message = '';
  constructor(
    public _employee_service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.message = '';
    this._employee_service.getEmployee(this.id).subscribe((data) => {
      this.employeeData = data;
    });
  }

  updateEmployee(): void {
    this._employee_service.update(this.id, this.employeeData).subscribe(
      (response) => {
        M.toast({ html: 'Updated Successfully', classes: 'rounded' });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
