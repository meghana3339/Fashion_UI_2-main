import { Component } from '@angular/core';
import { Seller } from '../../../Models/seller';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallsellers',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getallsellers.component.html',
  styleUrl: './getallsellers.component.css'
})
export class GetallsellersComponent {
  seller: Seller[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getAllsellers();
  }
  getAllsellers() {
    this.http
      .get<Seller[]>('http://localhost:5254/api/Seller/GetAllSellers')
      .subscribe((response) => {
        this.seller = response;
        console.log(this.seller);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5254/api/Seller/DeleteSeller/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllsellers(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }

}
