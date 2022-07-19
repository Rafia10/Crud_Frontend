import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'list/:id', component: EmployeeListComponent },
  { path: 'list/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
