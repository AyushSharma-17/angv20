import { Component, inject } from '@angular/core';
import { Master } from '../../Services/master';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-service',
  imports: [],
  templateUrl: './test-service.html',
  styleUrl: './test-service.css'
})
export class TestService {

  masterService= inject(Master);
  UserList:any[]=[];

  userForm:FormGroup= new FormGroup({
     userId: new FormControl
  })
  ngOnInit():void{
    const result= this.masterService.getSum(10,20);
    console.log(result);
    this.getUsers();
    
  }
  
  getUsers() {
  this.masterService.getUsers().subscribe((res: any) => {
    this.UserList = res;
    console.log(res);
  });
  
}


}
