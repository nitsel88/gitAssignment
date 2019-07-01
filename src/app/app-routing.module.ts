import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent }  from './employee/employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees/:id', pathMatch: 'full'},
  { path: 'employees/:id', component: EmployeeComponent },
  { path: 'employees/new', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
