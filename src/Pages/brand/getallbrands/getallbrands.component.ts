import { Component } from '@angular/core';
import { Brand } from '../../../Models/brand';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getallbrands',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './getallbrands.component.html',
  styleUrl: './getallbrands.component.css'
})
export class GetallbrandsComponent {
  brand: Brand[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getAllbrands();
  }
  getAllbrands() {
    this.http
      .get<Brand[]>('http://localhost:5254/api/Brand/GetAllBrands')
      .subscribe((response) => {
        this.brand = response;
        console.log(this.brand);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5254/api/Brand/DeleteBrand/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllbrands(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }

}



