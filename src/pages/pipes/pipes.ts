import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,JsonPipe,DatePipe,SlicePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
firstname:string="ayush";
courseName:string="angular pipe title";
rollList=[1,2,3,4,5,6,7,8,9];
currentDate :Date =new Date();
studentList={
  name:"ayush",
  course:"angular",
  roll:101
}
}
