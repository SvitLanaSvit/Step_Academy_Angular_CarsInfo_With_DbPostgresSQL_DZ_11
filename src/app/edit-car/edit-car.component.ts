import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';
import { Car } from '../car';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit{
  id: number = 0;
  car: Car = new Car("", "", 0, 0, "");
  done: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpService){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id = parseInt(params["id"]));
    this.http.getCar(this.id).subscribe((data:any)=>{
      this.car = data;
    });
  }

  submit(){
    this.http.putCar(this.car).subscribe((data: any)=>{
      this.car = data;
      this.done = true;
    })
  }
  clear(){
    this.car = new Car("", "", 0, 0, "");
    this.done = false;
  }
}
