import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {
  deptList!:Department[];
  constructor(private deptService : DepartmentService) { }

  ngOnInit(): void {
    this.deptService.getList().subscribe(list =>{
        this.deptList=list;
        console.log(list);
    },err=>{
      console.log(err);
      
    })
  }

  delete(id:number){
    if(confirm("Department will be deleted")){
      console.log("Deleted");
      this.deptService.delete(id).subscribe(result => {
        alert("Department successfull deleted");
        this.ngOnInit();
      }, err => console.log(err)
      )
    }
  }

}
