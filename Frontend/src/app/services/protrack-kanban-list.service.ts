import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';
import { Kanban } from '../models/Kanban';
import { KanbanList } from '../models/KanbanList';
@Injectable({
  providedIn: 'root'
})
export class ProtrackKanbanListService {
  private uri: string = "http://127.0.0.1:8000/api";

  constructor(
    private http:HttpClient
  ) { }

  setHeader():HttpHeaders
  {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({'Authorization': "Bearer "+access});
  }

  getKanbanLists(id:String):Observable<any>{
    return this.http.get(this.uri+"/kanbans/"+id+"/kanban-list",{headers:this.setHeader()})
  }

  getKanbanListById(kanbanId:String,listId:String):Observable<any>{
    return this.http.get(this.uri+"/kanbans/"+kanbanId+"/kanban-list/"+listId,{headers:this.setHeader()})
  }

  createKanbanList(kanbanId:String,kanbanList:KanbanList):Observable<any>{
    return this.http.post(this.uri+"/kanbans/"+kanbanId+"/kanban-list",kanbanList,{headers:this.setHeader()})

  }
}
