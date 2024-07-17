import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProtrackBudgetService {
  private uri:string= "http://127.0.0.1:8000/api";
  constructor(
    private http:HttpClient
  ) { }

  setHeader():HttpHeaders
  {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({'Authorization': "Bearer "+access});
  }

  getAllBudgetsOfProject(id:string):Observable<any>{
    return this.http.get(this.uri+"/projects/"+id+"/budgets",{headers:this.setHeader()})
  }

  deleteBudget(id:String):Observable<any>{
    return this.http.delete(this.uri+"/budgets/"+id,{headers:this.setHeader()})
  }
}
