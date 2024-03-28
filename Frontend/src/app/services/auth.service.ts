import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private uri:string="http://127.0.0.1:8000/api";

  constructor(
    private http:HttpClient
  ) { }

  login(user:User):Observable<any>{

    return this.http.post(this.uri+"/login",user);
  }

  register(user:User):Observable<any>{
    console.log(user);

    return this.http.post(this.uri+"/register",user);
  }
}
