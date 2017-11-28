import { Component, OnInit } from '@angular/core';
import { Orders } from '../../models/Orders';
import { RefundTransacionObject } from '../../models/RefundTransacionObject';
import { OrdersService } from '../../services/orders.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { RefundResultResponse } from '../../models/RefundResultResponse';
import { ReversalResultResponse } from '../../models/ReversalResultResponse';
import { EndBusinessDayResponse } from '../../models/EndBusinessDayResponse';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Orders[];
  ordersFull:Orders[];
  ref: RefundTransacionObject;
  respons: RefundResultResponse;
  revers:ReversalResultResponse;
  endday:EndBusinessDayResponse;


  constructor(private api: OrdersService,public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getOrders().subscribe((result) => {
      this.orders = result;
      this.ordersFull = result;
    })
  }

  openDialogRefund(trans_id: string, amount: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'რეფანდი', message: 'ადასტურებთ რომ გსურთ რეფანდი?' } }); 
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.ref = new RefundTransacionObject();
        this.ref.Amount = amount;
        this.ref.TransactionId = trans_id;
         this.api.RefundOrder(this.ref).subscribe((res) => {
           this.respons = res;
           if(this.respons.ResultCode == "000"){
             alert("წარმატებით დასრულდა რეფანდი");
           }else{
            alert("რეფანდი წარუმატებელია!");
           }
         });
      }
    });
  }

  openDialogReversal(trans_id: string, amount: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'რევერსალი', message: 'ადასტურებთ რომ გსურთ რევერსალი?' } }); 
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.ref = new RefundTransacionObject();
        this.ref.Amount = amount;
        this.ref.TransactionId = trans_id;
         this.api.ReversalOrder(this.ref).subscribe((res) => {
           this.revers = res;
           if(this.revers.ResultCode == "400"){
             alert("წარმატებით დასრულდა რევერსალი");
           }else{
            alert("რევერსალი წარუმატებელია!");
           }
         });
      }
    });
  }

  openDialogEndDay(trans_id: string, amount: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'დასტური', message: 'ადასტურებთ რომ გსურთ დღის დახურვა?' } }); 
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.ref = new RefundTransacionObject();
        this.ref.Amount = amount;
        this.ref.TransactionId = trans_id;
         this.api.EndDay().subscribe((res) => {
           this.endday = res;
           if(this.endday.ResultCode == "500"){
             alert("წარმატებით დაიხურა დღე");
           }else{
            alert("დღის დახურვა ვერ მოხერხდა!");
           }
         });
      }
    });
  }

  openDialogDelete(Id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'წაშლა', message: 'წაიშალოს ჩანაწერი?' } });
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
         this.api.deleteOrder(Id).subscribe((res) => {
          this.orders = this.orders.filter(x => x.Id !== Id);
         });
      }
    });
  }

  openDialogTrans(TransactionId: string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: 'ტრანზაქციის ნომერი', message: TransactionId } });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  Search(search: string){
    if(search === ''){
      this.orders = this.ordersFull;
      return;
    }
    this.orders = this.ordersFull.filter(x=>x.FirstName.includes(search) 
    || x.LastName.includes(search) 
    || x.Email.includes(search)
    || x.PersonalId.includes(search)
    || x.Phone.includes(search)
    || x.Comment.includes(search)
  );
  }
}
