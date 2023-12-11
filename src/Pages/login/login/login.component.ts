import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User;
  email: string = '';
  password: string = '';
  errMsg: string = '';
  httpResponse: any;
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
    let login = { Email: this.email, Password: this.password };
    this.http
      .post('http://localhost:5254/api/User/Validate', login)
      .subscribe((response) => {
        this.httpResponse = response;
        console.log(this.httpResponse);
        if (this.httpResponse.token != null) {
          //store token in local storage
          localStorage.setItem('token', this.httpResponse.token);

          if (this.httpResponse.roleName == 'Customer') {
            this.router.navigateByUrl('customerdashboard');
          } else if (this.httpResponse.roleName == 'Admin') {
            this.router.navigateByUrl('admindashboard');
          } else if (this.httpResponse.roleName == 'Seller'){
            this.router.navigateByUrl('sellerdashboard');
          }
        } else {
          this.errMsg = 'Invalid Credentials';
          console.log(this.errMsg);
        }
      });
  }
  onRegister(form:NgForm): void{
    this.router.navigateByUrl('adduser')
  }

  sellerRegister(form:NgForm):void{
    this.router.navigateByUrl('addseller')
  }

  loginSeller(form:NgForm):void{
    this.router.navigateByUrl('sellerlogin')
  }

  onReset(form: NgForm): void {
    form.reset();
  }
}
