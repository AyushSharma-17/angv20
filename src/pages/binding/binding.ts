import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.html',
  styleUrl: './binding.css'
})
export class Binding {
    

  courseName: string = "Angular"; //storngly typed variable
  courseId: number = 101;

  //event binding function 
  showMessage(){
    alert("Button clicked");
  }

  //function to change value of courseName
  changeName(){
    this.courseName="ayush";
}
}
