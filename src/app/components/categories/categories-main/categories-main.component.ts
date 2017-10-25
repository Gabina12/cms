import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/categories.service';
import { Category } from '../../../models/Category';
import { MatDialog } from '@angular/material';
import { CategoriesDeleteComponent } from '../categories-delete/categories-delete.component';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css']
})
export class CategoriesMainComponent implements OnInit {

  categories: Category[];
  
  constructor(private api: CategoryService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getCategories().subscribe((result) => {
      this.categories = result;
      this.categories = this.categories.sort( (a, b) => {
          if (a.SortId > b.SortId) {
            return 1;
          }else if (a.SortId > b.SortId) {
            return -1;
          }else {
            return 0;
          }
      });
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(CategoriesDeleteComponent, { data: { id: id } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result === true){
         this.api.deleteCategory(id).subscribe((res) => {
            this.categories = this.categories.filter(x => x.Id !== id);
         });
      }
    });
  }

  getParentDesc(Id: number){
    if(Id == null) return "";
    return this.categories.filter(x=>x.Id == Id)[0].Descrip;
  }

}
