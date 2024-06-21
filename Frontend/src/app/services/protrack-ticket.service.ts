import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class ProtrackTicketService {
  private uri: string = "https://xzxi2hojv7fywfplkbqftq3a5i0mnbnd.lambda-url.us-east-1.on.aws/api";


  constructor(
    private http: HttpClient,
  ) { }

  setHeader(): HttpHeaders {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({ 'Authorization': "Bearer " + access });
  }

  getTicketById(id: String): Observable<any> {
    return this.http.get(this.uri + "/tickets/" + id, { headers: this.setHeader() })
  }

  getAllTickets(): Observable<any> {
    return this.http.get(this.uri + "/tickets", { headers: this.setHeader() })
  }

  getAllTicketsOfUser():Observable<any>{
    return this.http.get(this.uri + "/user/tickets", { headers: this.setHeader() })
  }

  createTicket(id: String, ticket: Ticket): Observable<any> {
    return this.http.post(this.uri + "/kanban-list/" + id + "/tickets", ticket, { headers: this.setHeader() })
  }

  updateTicket(id: String, ticket: Ticket): Observable<any> {
    return this.http.put(this.uri + "/tickets/" + id, ticket, { headers: this.setHeader() })
  }

  deleteTicket(id: String): Observable<any> {
    return this.http.delete(this.uri + "/tickets/" + id, { headers: this.setHeader() })
  }

  removeUserFromTicket(id:String,userId:String):Observable<any>{
    return this.http.post(this.uri+"/tickets/"+id+"/remove-member",{userId:Number(userId)},{headers:this.setHeader()})
  }
  addUserToTicket(id:String,userId:String):Observable<any>{

    return this.http.post(this.uri+"/tickets/"+id+"/add-member",{userId:Number(userId)},{headers:this.setHeader()})
  }
}
