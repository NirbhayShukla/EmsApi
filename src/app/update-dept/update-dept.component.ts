import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-update-dept',
  templateUrl: './update-dept.component.html',
  styleUrls: ['./update-dept.component.css']
})
export class UpdateDeptComponent implements OnInit {
  deptForm! : FormGroup;
  constructor(private deptSerivce : DepartmentService,private router:Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    let deptId=this.route.snapshot.params['id'];
    console.log(deptId);

    this.deptSerivce.getById(deptId).subscribe(dept =>{
      this.deptForm=new FormGroup({
        "name":new FormControl(dept.name,Validators.required),
        "id" : new FormControl(dept.id)
      },
      // err=>{
      //   console.log(err);
        
      // }
      );

    })
    
  }
  onSubmit(){
    console.log(this.deptForm);
    this.deptSerivce.update(this.deptForm.value as unknown as Department).subscribe(res=>{alert("Department updated successfully");
    this.router.navigate(['/departments']);
  },
  err => alert(err));
  }

}
