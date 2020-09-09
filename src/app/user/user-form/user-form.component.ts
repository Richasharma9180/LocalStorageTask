import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public storeUserDetails;
  public today = new Date();
  public userMessage;
  public email;
  constructor(private service: GenericService,private route: ActivatedRoute,) { }
  

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
    debugger;
    // details of the user
    
    this.storeUserDetails = this.service.getUserDetails();
  }

  // Method to store and book the booking details
  onUserClick(data) { 
    this.storeUserDetails.push(data);
    this.userMessage = true;
    localStorage.setItem('User', JSON.stringify(this.storeUserDetails));
  }

 

  // Method to close the alert message
  close() {
    this.userMessage = false;
  }


}
