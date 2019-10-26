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

    id: any;
    email: string;

    constructor(private regService: RegistrationService) { }

    ngOnInit() {
        this.id = false;
    }

    onSearchSubmit() {
        this.regService.getUsers(this.email).subscribe(res => {
            this.firstName = null;
            this.lastName = null;
            this.nic = null;
            this.address = null;
            this.id = false;

            res.forEach(e=>{
        
                let type = e.data().type
                if (type == "Guide" ) {
                    this.id = e.id;
                }
            });

            if(!this.id){
                alert("Invalid Email");
            }

        });
    }

    onFormSubmit() {
        const userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            nic: this.nic,
            address: this.address
        }

        this.regService.updateUser(this.id,userData).then(e=>{
            alert("done");
            this.firstName = null;
            this.lastName = null;
            this.nic = null;
            this.address = null;
            this.id = false;
        });
    }
}
