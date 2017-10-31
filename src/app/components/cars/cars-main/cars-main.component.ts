import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { Cars } from '../../../models/Cars';
import { DropDown } from '../../../models/DropDown';

@Component({
  selector: 'app-cars-main',
  templateUrl: './cars-main.component.html',
  styleUrls: ['./cars-main.component.css']
})
export class CarsMainComponent implements OnInit {

  cars: Cars[];
  fuleTypes: DropDown[];
  constructor(private api: CarsService) { }

  ngOnInit() {
    this.api.getCars().subscribe((result) => {
      this.cars = result;
    });
    this.api.getDropDown(3).subscribe((result) => {
      this.fuleTypes = result;
    });
  }

  getFuleType(id: number){
    return this.fuleTypes.filter(x => x.Id == id)[0].Descrip;
  }
  Search(search: string){

  }

}
