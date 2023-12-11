import { Component } from '@angular/core';
import { Order } from '../../../Models/order';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getorders',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getorders.component.html',
  styleUrl: './getorders.component.css'
})
export class GetordersComponent {
  order: Order[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getorders();
  }
  getorders() {
    this.http
      .get<Order[]>('http://localhost:5254/api/Order/GetOrders')
      .subscribe((response) => {
        this.order = response;
        console.log(this.order);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:64257/api/Movie/DeleteMovie/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getorders(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }

}



