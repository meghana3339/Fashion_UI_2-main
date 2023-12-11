import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getorderbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getorderbyid.component.html',
  styleUrl: './getorderbyid.component.css'
})
export class GetorderbyidComponent {
  orderId?: number = 0;
  order: Order;
  errMsg: string = '';
  isorderExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.order = new Order();
    
    this.activateRoute.params.subscribe((p) => (this.orderId = p['mid']));
    console.log(this.orderId);
    this.search();
  }
  search() {
    console.log(this.order);
    this.http
      .get<Order>(
        'http://localhost:5254/api/Order/GetOrderById/' + this.orderId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.order = response;
          this.isorderExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid order Id';
          this.isorderExist = false;
        }
      });

}
delete() {
    this.orderId = this.order.orderId;
    this.http
      .delete('http://localhost:5254/api/Brand/DeleteBrand/' + this.orderId)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getall');
  }
}


