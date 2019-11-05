import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class AuthserviceService {
  constructor(public http: HttpClient
    ) { }

  api = 'http://localhost:3000';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  


  getAuthUser(name: string) {
    return this.http.get<User>(`${this.api}/usuario/user/${name}`);
  }

}
