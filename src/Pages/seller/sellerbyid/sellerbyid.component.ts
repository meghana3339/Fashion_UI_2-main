import { Component } from '@angular/core';
import { Seller } from '../../../Models/seller';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sellerbyid',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './sellerbyid.component.html',
  styleUrl: './sellerbyid.component.css'
})
export class SellerbyidComponent {
  userId?: number = 0;
  seller: Seller;
  errMsg: string = '';
  issellerExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.seller = new Seller();
    
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<Seller>(
        'http://localhost:5254/api/Seller/GetSellerById/' + this.userId
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.seller = response;
          this.issellerExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Seller Id';
          this.issellerExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5254/api/Seller/EditSeller', this.seller)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getallsellers');
  }
  delete() {
    this.userId = this.seller.userId;
    this.http
      .delete('http://localhost:5254/api/Seller/DeleteSeller/' + this.userId)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getallsellers');
  }

}




