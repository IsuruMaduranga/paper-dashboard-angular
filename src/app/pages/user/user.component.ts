import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'app/services/registration.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    firstName: string;
    lastName: string;
    nic: string;
    address: string;

    constructor(private regService:RegistrationService){}
    
    ngOnInit() {
    }

    onSubmit(){

        const userData = {
          firstName:this.firstName,
          lastName:this.lastName,
          nic:this.nic,
          address:this.address
        }
    
      }
}
