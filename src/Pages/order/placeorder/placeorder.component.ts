import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-placeorder',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent {
  order: Order;
  constructor(private http: HttpClient, private router: Router){
    this.order= new Order();
  }
  placeOrder(){
    this.http
    .post('http://localhost:5254/api/Order/PlaceOrder', this.order)
    .subscribe((Response) => {
      console.log(Response);
    });
  this.router.navigateByUrl('placeorder');
  }

}
