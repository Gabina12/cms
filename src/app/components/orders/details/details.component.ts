import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CarsService } from '../../../services/cars.service';
import { OrdersService } from '../../../services/orders.service';
import { Cars } from '../../../models/Cars';
import { Orders } from '../../../models/Orders';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  carId: number;
  orderId: number;
  order: Orders;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   public orderApi: OrdersService) { }

  ngOnInit() {
    this.carId = this.data.carId;
    this.orderId = this.data.orderId;

    this.orderApi.getOrderById(this.orderId).subscribe(res => {
      this.order = res;
    });
  }

}
