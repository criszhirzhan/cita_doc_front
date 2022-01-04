import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioRegistroPatologia } from '../models/formularios/formularioRegPatologia';
import { PacientePatologia } from '../models/Paciente_Patol';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class PatologiaService {

  url='http://localhost:8090/api/private/paciente_patologia'
  constructor(private http: HttpClient,
    private tokenService: TokenService
   ) { }

  headers_obj = new HttpHeaders().set("Authorization","Bearer "+this.tokenService.getToken());   

  addPatologia(formulario: FormularioRegistroPatologia): Observable<any>{
    console.log('Service form: ', formulario)
   
    return this.http.post(this.url, formulario, {headers: this.headers_obj});
  }

  getPatologia(id:number): Observable<PacientePatologia>{
    return this.http.get<PacientePatologia>(this.url+'/'+id, {headers: this.headers_obj});

  }

  updatePatologia(formulario: FormularioRegistroPatologia): Observable<any>{
    return this.http.post<any>(this.url+'/update', formulario, {headers: this.headers_obj});
  }

}
