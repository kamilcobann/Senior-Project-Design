import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private uri: string = "https://xzxi2hojv7fywfplkbqftq3a5i0mnbnd.lambda-url.us-east-1.on.aws/api";

  constructor(
    private http:HttpClient
  ) { }

  getAllUsers():Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.get(this.uri+"/users",{headers:headers})
  }

  login(user:User):Observable<any>{

    return this.http.post(this.uri+"/login",user);
  }

  register(user:User):Observable<any>{
    console.log(user);

    return this.http.post(this.uri+"/register",user);
  }


  logout():Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    sessionStorage.removeItem('authorization')
    return this.http.post(this.uri+"/logout",{headers:headers})
  }
}
