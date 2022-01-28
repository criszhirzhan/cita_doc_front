
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/Login';
import { Jwt } from '../models/Jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authURL = 'http://citadoc-env-1.eba-tere2tz5.sa-east-1.elasticbeanstalk.com/api/auth/';
  //authURL = 'http://www.citasmedicaspepitas.info/api/auth/';
  authURL = 'http://localhost:8090/api/auth/';
  
  constructor(private http: HttpClient) { }

  public login(login: Login): Observable<Jwt>{
    return this.http.post<Jwt>(this.authURL+'paciente_login',login);
  }
}