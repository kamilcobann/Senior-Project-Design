import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtrackKanbanService {

  private uri:string="http://127.0.0.1:8000/api";

  constructor(
    private http:HttpClient
  ) { }

  setHeader():HttpHeaders
  {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({'Authorization': "Bearer "+access});
  }

  getAllKanbansOfProject(id:String):Observable<any>{
    return this.http.get(this.uri+"/projects/"+id+"/kanbans",{headers:this.setHeader()})
  }

  deleteKanbanById(id:String):Observable<any>{
    return this.http.delete(this.uri+"/kanbans/"+id,{headers:this.setHeader()})
  }

}
