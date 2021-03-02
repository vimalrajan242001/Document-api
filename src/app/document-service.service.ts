import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {
  public url = "https://demodeepstream.deepgrade.in:8443/teacher/documents"

  constructor(
    public http: HttpClient
  ) { }
  getdata(): Observable<any> {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZWFjaGVyMkB0cy5pbiIsImV4cCI6MTYxOTc2MDcwNiwiaWF0IjoxNjE0NTc2NzA2fQ.NkAHMUB39gKjOYqw6tlyyYqNqLJvRELvdUaz6Q_qvc1JIAKmMjhvZrsLLLb0J00APNlv0eDSITXstB8FKmfvIQ"
    const header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 'Tenant': 'PWJ116' })
    const params = new HttpParams().set('teacherId', '5f6a17b3495cb10fe35df2d5').set('type', 'ALL').set('subject', 'ALL').set('standard', 'ALL')
    return this.http.get(this.url, { headers: header,params })
  }
}