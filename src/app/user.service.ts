import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../app/models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public globalUrl = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  getAllList(){
    return this.http.get(this.globalUrl);
  }
  saveUser(user:User){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.globalUrl + 'add', {headers:headers});
}
  
  
}
