import { Component, OnInit } from '@angular/core';
import { Cars } from '../../../models/Cars';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarsService } from '../../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDown } from '../../../models/DropDown';
import { UploadFile } from '../../../models/UploadFile';
import { FileManagerService } from '../../../services/file-manager.service';
import { IMultiSelectOption,IMultiSelectSettings } from 'ng2-multiselect';


@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {

  mySettings = {
    keyToSelect: "Url",
    lableToDisplay: "Url"
  };

  myTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    defaultTitle: 'Select',
    allSelected: 'All selected',
};

  car: Cars;
  form: FormGroup;
  id: number;
  dropDowns: DropDown[];
  files: UploadFile[];
  optionsModel: string[];
  mainImg: string;

  constructor(private api: CarsService,
    private fapi: FileManagerService,
    private route: ActivatedRoute,
    private nav: Router) { 
      this.route.params.subscribe( params => this.id = params['id'] );
    }

  ngOnInit() {
    this.api.getDropDowns().subscribe((res) => {
      this.dropDowns = res;
    });
    this.fapi.get().subscribe((result) => {
      this.files = result;
    });
    this.api.getCarById(this.id).subscribe((res) => {
      this.car = res;
      this.optionsModel = this.car.ExtraImages.split(';');
      this.mainImg = this.car.ImageUrl;
      this.form = new FormGroup({
        CarsId: new FormControl(this.car.CarsId, Validators.required),
        Title: new FormControl(this.car.Title, Validators.required),
        NumberOfDoors: new FormControl(this.car.NumberOfDoors, Validators.required),
        NumberOfSeats: new FormControl(this.car.NumberOfSeats, Validators.required),
        FuelType: new FormControl(this.car.FuelType, Validators.required),
        Transmission: new FormControl(this.car.Transmission, Validators.required),
        DriveWheels: new FormControl(this.car.DriveWheels, Validators.required),
        Mileage: new FormControl(this.car.Mileage, Validators.required),
        Engine: new FormControl(this.car.Engine, Validators.required),
        ShortDescrip: new FormControl(this.car.ShortDescrip, Validators.required),
        Descrip: new FormControl(this.car.Descrip, Validators.required),
        ImageUrl: new FormControl(this.car.ImageUrl, Validators.required),
        ExtraImages: new FormControl(this.car.ExtraImages, Validators.required),
        Price: new FormControl(this.car.Price, Validators.required),
        Category: new FormControl(this.car.Category, Validators.required),
        Ccy: new FormControl(this.car.Ccy, Validators.required),
        Date: new FormControl(this.car.Date, Validators.required),
        Lang: new FormControl(this.car.Lang, Validators.required),
        Color: new FormControl(this.car.Color, Validators.required),
      });
    });
   
  }

  edit(obj: Cars){
    obj.ExtraImages = this.optionsModel.join(';');
    this.api.putCar(obj).subscribe((result) => {
      this.car = result;
        this.nav.navigateByUrl('cars');
    });
  }

  getDropDown(id: number){
    return this.dropDowns.filter(x=>x.Type == id);
  }

  onChange(event) {
   
  }

  onChangeMain(event) {
    console.log(event);
    
    this.mainImg = event;
   }

  getParam(code: string){
    return localStorage.getItem(code);
  }

}

