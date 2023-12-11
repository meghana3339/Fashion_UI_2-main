import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getallusers',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './getallusers.component.html',
  styleUrl: './getallusers.component.css'
})
export class GetallUsersComponent {
  user: User[] = [];
  constructor(private http: HttpClient, private router: Router) {
    this.getAllusers();
  }
  getAllusers() {
    this.http
      .get<User[]>('http://localhost:5254/api/User/GetAllUsers')
      .subscribe((response) => {
        this.user = response;
        console.log(this.user);
      });
  }
 
}