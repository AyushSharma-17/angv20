import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css'
})
export class ReactiveForms implements OnInit {

  constructor() { }
  userList:any[]=[];

  userForm: FormGroup=new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(''),
    password: new FormControl(''),
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
