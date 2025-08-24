import { NgClass ,NgStyle} from '@angular/common';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-directive-atr',
  imports: [NgClass, NgStyle],
  templateUrl: './directive-atr.html',
  styleUrl: './directive-atr.css'
})
export class DirectiveAtr {
div1ClassName=signal<string>("");
isdiv2colorGreen:boolean=false;
setbgground(className:string){
  this.div1ClassName.set(className);
}
togglediv2color(){
  this.isdiv2colorGreen=!this.isdiv2colorGreen;
}
}
