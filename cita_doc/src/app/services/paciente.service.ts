import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  api   = 'http://localhost:8090/api/private/paciente';
  url='http://localhost:8090/api/public/paciente/'

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  // CREAR MODELO PACIENTE 
  getPaciente(): Observable<any>{
    return this.http.get<any>(this.url+this.tokenService.getUserId())
  }

  // getPacienteJSON(): Observable<any>{
  //   return this.http.get<any
  //   >(this.url+this.tokenService.getUserId());
  // }

  headers_obj = new HttpHeaders().set("Authorization","Bearer "+this.tokenService.getToken());
  getPacienteJSON(): Observable<Paciente>{
    return this.http.get<Paciente>(this.api+'/'+this.tokenService.getUserId(),{headers: this.headers_obj});
  }



}
