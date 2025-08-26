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
onEdit(item:any){
  this.userObj=item;
}
onupdateUser(){
  this.userObj.createdDate=new Date();
this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.userObj.userId,this.userObj).subscribe({
  next:()=> {
    alert("user updated successfully");
    this.getUser();
  },
  error:(error)=>{
    alert("error"+error.error);
  }
})
}
onDelete(id:number){
  const conf=confirm("Are you sure want to delete?");
  if(conf)
  {
  this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+id).subscribe({
  next:()=> {
    alert("user Deleted successfully");
    this.getUser();
  },
  error:(error)=>{
    alert("error"+error.error);
  }
})
}
}
}
