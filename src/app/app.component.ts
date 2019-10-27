import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private toastr: ToastrService, private regService: RegistrationService) {}
  ngOnInit() {

    this.regService.alerts().subscribe(res => {
    
      res.forEach(e => {
        let msg = e.payload.doc.data();
        this.showNotification(msg["msg"]);
      });

    });
  }


  showNotification(msg) {

    this.toastr.error(
      `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${msg}</b></span>`,
      "",
      {
        timeOut: 4000,
        enableHtml: true,
        closeButton: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-" + "top" + "-" + "right"
      }
    );

  }
}
