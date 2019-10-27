import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { tap } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: AngularFirestore) { }

  getUsers(email:String) {
    return this.firestore.collection("users",res=>res.where("email","==",email)).get();
  }

  getAllUsers(){
    return this.firestore.collection("users").get()
  }

  getGuidesOnline(){
    return this.firestore.collection("online_guides").snapshotChanges()
  }

  updateUser(id,data){
    return this.firestore.collection("users").doc(id).set(data , {merge:true});
  }

  alerts(){
    return this.firestore.collection("msgs").snapshotChanges()
  }

}
