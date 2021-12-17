import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
import { Login } from '../models/login';
import { Jwt } from '../models/jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8090/api/auth";

  constructor(private http: HttpClient) { }

  loginPaciente(login: Login): Observable<Jwt>{
    return this.http.post<Jwt>(this.url+'/paciente_login', login);
  }
}
