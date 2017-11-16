import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../../services/cars.service';
import { Cars } from '../../../models/Cars';
import { DropDown } from '../../../models/DropDown';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { log } from 'util';

@Component({
  selector: 'app-cars-main',
  templateUrl: './cars-main.component.html',
  styleUrls: ['./cars-main.component.css']
})
export class CarsMainComponent implements OnInit {

  cars: Cars[];
  fuleTypes: DropDown[];
  constructor(private api: CarsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getCars().subscribe((result) => {
      this.cars = result;
    });
    this.api.getDropDown(3).subscribe((result) => {
      this.fuleTypes = result;
    });
  }

  getFuleType(id: number){
    let item = this.fuleTypes.filter(x => x.Id == id)[0];
    if(item == null) return "";
    return item.Descrip;
  }

  Search(search: string){

  }

  openDialog(Id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === true){
         this.api.deleteCar(Id).subscribe((res) => {
            this.cars = this.cars.filter(x => x.CarsId !== Id);
         });
      }
    });
  }

}
