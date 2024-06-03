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

  setHeader():HttpHeaders
  {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({'Authorization': "Bearer "+access});
  }

  createProject(project:Project):Observable<any>{
    return this.http.post(this.uri+"/projects/",project,{headers:this.setHeader()})
  }

  getAllProjects():Observable<any>{
    return this.http.get(this.uri+"/projects",{headers:this.setHeader()})
  }

  getAllProjectsOfUser():Observable<any>{
    return this.http.get(this.uri+"/user/projects",{headers:this.setHeader()})
  }

  getProjectById(id:String):Observable<any>{
    return this.http.get(this.uri+"/projects/"+id,{headers:this.setHeader()})
  }

  deleteProjectById(id:String):Observable<any>{
    return this.http.delete(this.uri+"/projects/"+id,{headers:this.setHeader()})
  }

  addMemberToProject(id:String,userId:any):Observable<any>{
    return this.http.post(this.uri+"/projects/"+id+"/add-member",userId,{headers:this.setHeader()})
  }
  removeMemberFromProject(id:String,userId:any):Observable<any>{
    const body = {'userId': userId}
    return this.http.post(this.uri+"/projects/"+id+"/remove-member",body,{headers:this.setHeader()})
  }

  updateProject(id:String,project:Project):Observable<any>{
    return this.http.put(this.uri+"/projects/"+id,project,{headers:this.setHeader()})
  }

}
