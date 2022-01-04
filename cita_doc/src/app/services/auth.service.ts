
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login';
import { Jwt } from '../models/Jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8090//api/auth/';
  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<Jwt>{
    return this.http.post<Jwt>(this.authURL+'paciente_login',login);
  }
}