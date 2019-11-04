import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public http: HttpClient
    ) { }
    
  api = 'http://localhost:3000';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

}
