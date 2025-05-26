import { Component } from '@angular/core';
import { EmployeeDetailComponent } from "../employee-detail/employee-detail.component";
import { RouterOutlet } from '@angular/router';
import { ContentHeaderComponent } from '../content-header/content-header.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-management',
  imports: [  ContentHeaderComponent , EmployeeDetailComponent , EmployeeListComponent],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss'
})
export class EmployeeManagementComponent {

}
