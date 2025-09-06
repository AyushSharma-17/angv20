import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-new-c',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,SlicePipe,JsonPipe],
  templateUrl: './pipe-new-c.html',
  styleUrl: './pipe-new-c.css'
})
export class PipeNewC {

  courseName="Angular";
  titleName="angular is a front end framework"
  currentDate=new Date();
  rollList:number[]=[1,2,3,4,5,6,7,8,9,10];
  studentObj:any={
    name:"John",
    age:20,
    course:"Angular",
    address:{
      city:"New York",
      state:"NY"
    }
  }
}
