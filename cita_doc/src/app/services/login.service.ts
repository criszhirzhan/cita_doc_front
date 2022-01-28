import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente';
import { Login } from '../models/Login';
import { Jwt } from '../models/Jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url='http://www.citasmedicaspepitas.info/api/auth';
  url='http://localhost:8090/api/auth';
  constructor(private http: HttpClient) { }

  loginPaciente(login: Login): Observable<Jwt>{
    return this.http.post<Jwt>(this.url+'/paciente_login', login);
  }
}
