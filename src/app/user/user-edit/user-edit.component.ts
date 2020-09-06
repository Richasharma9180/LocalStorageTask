import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/service/generic.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id;

 
  constructor(public genericService: GenericService,private router: Router,
    private route: ActivatedRoute,) 
  {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
  }

  onSubmitOfEdit(name: HTMLInputElement, status: HTMLInputElement) {
    // this.genericService.getUserDetails[this.id].firstName = firstName.value;
    // this.genericService.getUserDetails[this.id].category = this.category.nativeElement.value;
    // this.genericService.getUserDetails[this.id].status = status.checked;
    //console.log(name);
    // this.showListPage.emit();
    this.router.navigate(['user'], { relativeTo: this.route })
  }

  onCancleOfEdit() {
    this.router.navigate(['user'], { relativeTo: this.route })
    // this.cancleClicked.emit();
  }
}

