import { Component } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-tempvalid',
  imports: [FormsModule, ],
  templateUrl: './tempvalid.html',
  styleUrl: './tempvalid.css'
})
export class Tempvalid {

  userObj:any={
    "userId":0,
    "emailId":"",
    "password":"",
    "fullName":"",
    "mobileNo":"",
  };
  onSaveUser(){
   
    alert("user created successfully");
  }
  onUser(){
    alert("user created successfully   test");
  }
}
