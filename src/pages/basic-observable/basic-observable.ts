import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-basic-observable',
  imports: [],
  templateUrl: './basic-observable.html',
  styleUrl: './basic-observable.css'
})
export class BasicObservable {

  cityList:string[]=['Pune','Mumbai','Banglore','Chennai','Hydrabad'];
  cityList$=of(this.cityList);
  cityList2$= from(this.cityList);

  constructor() {
  const myObs$= new Observable(Value => {
    Value.next('Hello World');
  });
  myObs$.subscribe(message=>{
    console.log(message);
  })

  this.cityList$.subscribe((cityData:string[])=>{
    console.log(cityData);
  })

  this.cityList2$.subscribe((cityData2:string)=>{    //use string instead of string[] to get one by one value
    console.log(cityData2);
  })
}
}
