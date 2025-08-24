import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signall',
  imports: [],
  templateUrl: './signall.html',
  styleUrl: './signall.css'
})
export class Signall {
     
  firstname: string = 'John';
  lastname: string = 'Doe';
  Fname= signal<string>("Ayush");
  Lname= signal("2Sharma");

  constructor() {
   this.firstname="test1";
   console.log(this.firstname);
   console.log(this.Fname());
   this.Fname.set("testsignal");
   console.log(this.Fname()); // You can initialize or manipulate signals here if needed
  }
}
