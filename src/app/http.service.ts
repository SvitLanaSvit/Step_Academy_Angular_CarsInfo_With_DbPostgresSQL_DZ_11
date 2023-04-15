import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postCar(car: Car){
    return this.http.post("http://localhost:3000/cars", car);
  }

  getCars(){
    return this.http.get("http://localhost:3000/cars");
  }

  getCar(id: number){
    return this.http.get(`http://localhost:3000/car/${id}`);
  }

  deleteCar(car: Car){
    return this.http.delete(`http://localhost:3000/car/${car.id}`);
  }

  putCar(car: Car){
    return this.http.put(`http://localhost:3000/car/${car.id}`, car);
  }
}
