import { Component } from '@angular/core';
import { Product } from '../../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-productbyname',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './productbyname.component.html',
  styleUrl: './productbyname.component.css'
})
export class ProductbynameComponent {
  name?:string='';
  product:Product[]=[];
  grid=true;
  errMsg: string='';
  isProductExist:boolean=false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute

  ){
    //this.product = new Product();
    this.activateRoute.params.subscribe((p)=> (this.name=p['pid']));
    console.log(this.name);
    this.search();
  }

  search(){
    this.http
    .get<Product[]>('http://localhost:5254/api/Product/Searchbyname?productName=' + this.name)
    .subscribe((Response) => {
      console.log(Response);
      if(Response !=null){
        this.product = Response;
        console.log(this.product);
        this.isProductExist=true;
        this.errMsg='';
      } else{
        this.errMsg='No Product Exist';
        this.isProductExist=false;
      }
    });
  }

  

}