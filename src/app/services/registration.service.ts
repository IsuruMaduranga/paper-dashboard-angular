import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  register(data: any): Observable<any> {
    let url = `${api}/users/registerAdmin`;
    return this.http.post(url, JSON.stringify(userData), httpOptions);
  }
}
