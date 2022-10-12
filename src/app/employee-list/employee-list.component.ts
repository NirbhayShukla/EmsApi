import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Gender } from '../models/gender';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  gender=Gender
  empList!:Employee[];
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getList().subscribe(list =>{
      this.empList=list;
      console.log(list);
      
    },err => console.log(err)
    )
  }

  delete(id:number){

  }
}
