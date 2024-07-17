import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expense} from "../models/Expense";

@Injectable({
  providedIn: 'root'
})
export class ProtrackExpenseService {

  private uri: string = "http://127.0.0.1:8000/api";

  constructor(
    private http:HttpClient
  ) { }

  setHeader():HttpHeaders
  {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({'Authorization': "Bearer "+access});
  }

  getAllExpenses():Observable<any>{
    return this.http.get(this.uri+"/expenses/",{headers:this.setHeader()});
  }

  getExpenseById(id:number):Observable<any>{
    return this.http.get(this.uri+"/expenses/"+id,{headers:this.setHeader()});
  }

  updateExpenseById(id:number,expense:Expense):Observable<Expense>{
    return this.http.put(this.uri+"/expenses/"+id,expense,{headers:this.setHeader()});
  }

  createExpense(expense:Expense):Observable<any>{
    return this.http.post(this.uri+"/expenses",expense,{headers:this.setHeader()});
  }
}
