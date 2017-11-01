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
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {
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
    private nav: Router) { }

  ngOnInit() {
    this.api.getDropDowns().subscribe((res) => {
      this.dropDowns = res;
    });
    this.fapi.get().subscribe((result) => {
      this.files = result;
    });

      let lang = this.getParam('lang');
      this.form = new FormGroup({
        CarsId: new FormControl(0, Validators.required),
        Title: new FormControl(null, Validators.required),
        NumberOfDoors: new FormControl(null, Validators.required),
        NumberOfSeats: new FormControl(null, Validators.required),
        FuelType: new FormControl(null, Validators.required),
        Transmission: new FormControl(null, Validators.required),
        DriveWheels: new FormControl(null, Validators.required),
        Mileage: new FormControl(null, Validators.required),
        Engine: new FormControl(null, Validators.required),
        ShortDescrip: new FormControl(null, Validators.required),
        Descrip: new FormControl(null, Validators.required),
        ImageUrl: new FormControl(null, Validators.required),
        ExtraImages: new FormControl(null, Validators.required),
        Price: new FormControl(null, Validators.required),
        Category: new FormControl(null, Validators.required),
        Ccy: new FormControl(null, Validators.required),
        Date: new FormControl(null, Validators.required),
        Lang: new FormControl(lang, Validators.required),
        Color: new FormControl(null, Validators.required),
      });
    
   
  }

  create(obj: Cars){
    obj.ExtraImages = this.optionsModel.join(';');
    obj.Date = new Date();
    this.api.postCar(obj).subscribe((result) => {
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
