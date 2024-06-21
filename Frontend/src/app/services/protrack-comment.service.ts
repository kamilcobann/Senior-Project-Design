import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class ProtrackCommentService {
  private uri: string = "https://xzxi2hojv7fywfplkbqftq3a5i0mnbnd.lambda-url.us-east-1.on.aws/api";


  constructor(
    private http: HttpClient,
  ) { }
  setHeader(): HttpHeaders {
    const access = sessionStorage.getItem('authorization')
    return new HttpHeaders({ 'Authorization': "Bearer " + access });
  }

  getCommentById(id: String): Observable<any> {
    return this.http.get(this.uri + "/comments/" + id, { headers: this.setHeader() })
  }

  getAllComments(): Observable<any> {
    return this.http.get(this.uri + "/comments", { headers: this.setHeader() })
  }


  createComment(id: String, comment:Comment): Observable<any> {
    return this.http.post(this.uri + "/tickets/" + id + "/comments",comment, { headers: this.setHeader() })
  }

  getAllCommentsOfUser(): Observable<any> {
    return this.http.get(this.uri + "/user/comments", { headers: this.setHeader() })
  }

  getAllCommentsOfTicket(id: String): Observable<any> {
    return this.http.get(this.uri + "/tickets/"+id+"/comments", { headers: this.setHeader() })
  }

  updateComment(id: String, comment:Comment): Observable<any> {
    return this.http.put(this.uri + "/comments/" + id ,comment, { headers: this.setHeader() })
  }

  deleteComment(id: String): Observable<any> {
    return this.http.delete(this.uri + "/comments/" + id, { headers: this.setHeader() })
  }


}
