import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Seller } from '../../../Models/seller';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addseller',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './addseller.component.html',
  styleUrl: './addseller.component.css'
})
export class AddsellerComponent {
  seller: Seller;
  constructor(private http: HttpClient, private router: Router) {
    this.seller = new Seller();
  }
  addSeller() {
    this.http
      .post('http://localhost:5254/api/Seller/RegisterSeller', this.seller)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getallsellers'); 
  }

}
