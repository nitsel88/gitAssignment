import { Component, OnInit } from '@angular/core';
import {employees} from '../employees';
import { DataService } from "../data.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  message:string;
  employees = employees;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

}
