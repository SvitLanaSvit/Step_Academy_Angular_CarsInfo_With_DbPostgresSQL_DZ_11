import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Car } from '../car';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css'],
  providers: [HttpService]
})
export class CreateCarComponent {
  car: Car = new Car("", "", 0, 0, "");
  done: boolean = false;
  constructor(private http: HttpService){}

  submit(){
    this.http.postCar(this.car).subscribe((data:any)=>{
      console.log(data);
      this.car = data;
      this.done = true;
    });
  }

  clear(){
    this.car =  new Car("", "", 0, 0, "");
    this.done = false;
  }
}
