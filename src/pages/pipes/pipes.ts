import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
firstname:string="ayush";
}
