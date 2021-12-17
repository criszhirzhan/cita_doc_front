import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url="http://localhost:8090/api/auth";

  #paciente_registro

  constructor(private http: HttpClient) { }


  registrarPaciente(paciente: Paciente): Observable<any>{
    return this.http.post(this.url+'/paciente_registro', paciente)
  }
}
