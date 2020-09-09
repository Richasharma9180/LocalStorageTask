import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public email;
  
  public details: any;
  


 
  constructor(public service: GenericService,private router: Router,
    private route: ActivatedRoute,) 
  {}

  ngOnInit() {
   
    this.email = this.route.snapshot.paramMap.get['email'];

    this.route.params.subscribe(
      (params: Params) => {
        this.email = params['email'];
      }
    );
  }

  onSubmit(form:NgForm) {
     let user={
      firstName:form.value.firstName,
      lastName: form.value.lastName,
      phone: form.value.phone,
      email:form.value.email,
      dob:form.value.date,
      qualification :form.value.qualification,

     }
     console.log(user);
    
   
    this.router.navigate(['user'])
    
  }

  onCancleOfEdit() {
    this.router.navigate(['user'])
    // this.cancleClicked.emit();
  }
}

