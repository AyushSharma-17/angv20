import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userpost',
  imports: [FormsModule],
  templateUrl: './userpost.html',
  styleUrl: './userpost.css'
})
export class Userpost implements OnInit {
  
   
  http=inject(HttpClient);
  userList:any[]=[];
  userObj:any={
    "userId":0,
    "emailId":"",
    "password":"",
    "fullName":"",
    "mobileNo":"",
  };
  ngOnInit(): void {
    this.getUser();
  }
 
  getUser(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      this.userList=res;
    })
  }
  onSaveUser(){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next:()=> {
        alert("user created successfully");
        this.getUser();
      },
      error:(error)=>{
        alert("error"+error.error);
      }
  })
}
onreset(){
  this.userObj={
    "userId":0,
    "emailId":"",
    "password":"",
    "fullName":"",
    "mobileNo":"",
  };
}
}
