import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path: "edit", component: EditCarComponent, title: "Edit currency car."},
  {path: "create", component: CreateCarComponent, title: "Create new car."},
  {path: "list", component: CarListComponent, title: "Show all cars."}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
