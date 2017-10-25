import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { Cars } from '../../../models/Cars';

@Component({
  selector: 'app-cars-main',
  templateUrl: './cars-main.component.html',
  styleUrls: ['./cars-main.component.css']
})
export class CarsMainComponent implements OnInit {

  cars: Cars[];
  constructor(private api: CarsService) { }

  ngOnInit() {
    this.api.getCars().subscribe((result) => {
      this.cars = result;
    })
  }

}
