import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  deptForm! : FormGroup;
  constructor(private deptSerivce : DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.deptForm=new FormGroup({
      "name":new FormControl("",Validators.required)
    });
  }
  onSubmit(){
    console.log(this.deptForm);
    this.deptSerivce.add(this.deptForm.value as unknown as Department).subscribe(res=>{alert("Department added successfully");
    this.router.navigate(['/departments']);
  },
  err => alert(err));
  }

}
