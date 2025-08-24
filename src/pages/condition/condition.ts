import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-condition',
  imports: [FormsModule],
  templateUrl: './condition.html',
  styleUrl: './condition.css'
})
export class Condition {
    
  showMonth:string='jan'

  showtext: boolean = true;

  showp1(){
    this.showtext=true;
  }
  hidep1(){
    this.showtext=false;
  }

  studentList : any[] = [
    {name:'John',age:20,isActive:false},
    {name:'Doe',age:22,isActive:false},
    {name:'Smith',age:21,isActive:true},
    {name:'Jane',age:23,isActive:false}
  ];

}
