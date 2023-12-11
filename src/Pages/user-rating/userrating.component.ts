import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userrating',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './userrating.component.html',
  styleUrl: './userrating.component.css'
})
export class UserRatingComponent {
  @Input() rating:number=0;
  editMode=false;
  newRating:number=0;

  submit(){
    this.rating=this.newRating;
    this.editMode=false;
  }

  edit() {
    this.editMode=true;
    this.newRating=this.rating;
  }

  delete(){
    console.log(this.rating);
  }
  
  


}
