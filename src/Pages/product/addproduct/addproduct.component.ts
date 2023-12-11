import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  products: Product;
  constructor(private http: HttpClient, private router: Router) {
    this.products = new Product();
  }
  addProduct() {
    console.log(this.products);
    this.http
      .post('http://localhost:5254/api/Product/AddProduct', this.products)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('sellerdashboard/getallproducts'); 
  }

}
