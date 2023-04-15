import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Car } from '../car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit{
  cars: Car[] = []; //for deleteIndex is important!!!!
  constructor(private http: HttpService, private router: Router){}

  ngOnInit(): void {
    this.http.getCars().subscribe((data: any)=>{
      this.cars = data;
    })
  }

  editCar(id: number){
    this.router.navigateByUrl(`/edit?id=${id}`);
  }

  deleteCar(car: Car){
    this.http.deleteCar(car).subscribe((data:any)=>{
      if(data.message==="success"){
       let deletedIndex: number = this.cars?.findIndex(elem=>elem.id === data.id);
       this.cars?.splice(deletedIndex, 1);
      }
    });
  }
}
