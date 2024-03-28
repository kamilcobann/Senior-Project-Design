import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtrackProjectService {

  private uri:string="http://127.0.0.1:8000/api";

  constructor(
    private http:HttpClient
  ) { }

  createProject(project:Project):Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.post(this.uri+"/projects/",project,{headers:headers})
  }

  getAllProjects():Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.get(this.uri+"/projects",{headers:headers})
  }

  getAllProjectsOfUser():Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.get(this.uri+"/user/projects",{headers:headers})
  }

  getProjectById(id:String):Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.get(this.uri+"/projects/"+id,{headers:headers})
  }

  deleteProjectById(id:String):Observable<any>{
    const access = sessionStorage.getItem('authorization')
    const headers = new HttpHeaders({'Authorization': "Bearer "+access});
    return this.http.delete(this.uri+"/projects/"+id)
  }
}
