import { Component } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { RegistrationService } from 'app/services/registration.service';


@Component({
  selector: 'notifications-cmp',
  moduleId: module.id,
  templateUrl: 'notifications.component.html'
})

export class NotificationsComponent {

  alerts;

  constructor(private toastr: ToastrService, private regService: RegistrationService) {}

  ngOnInit() {

    this.alerts = [];
    this.regService.alerts().subscribe(res => {
    
      res.forEach(e => {
        let msg = e.payload.doc.data()["msg"];
        this.alerts.push(msg);
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
