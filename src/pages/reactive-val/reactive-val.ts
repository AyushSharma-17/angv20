import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-val',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-val.html',
  styleUrl: './reactive-val.css'
})
export class ReactiveVal implements OnInit {

  
  constructor() { }
  userList:any[]=[];

  userForm: FormGroup=new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(" ",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl("",[Validators.required,Validators.minLength(6)]),
    fullName: new FormControl(''),
    mobileNo: new FormControl('')
  });

  http=inject(HttpClient);
  ngOnInit(): void {
    this.getUser();
  }
getUser(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      this.userList=res;
    })
  }
  onEdit(item:any){}
  onDelete(item:any){}
  onSaveUser(){
    const formValue= this.userForm.value;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValue).subscribe({
        next:()=> {
        alert("user created successfully");
        this.getUser();
      },
      error:(error)=>{
        alert("error"+error.error);
      }
    })
  }
  onupdateUser(){}
  onreset(){}
}
