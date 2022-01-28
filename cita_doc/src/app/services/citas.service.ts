import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { CitaPaciente } from '../models/Cita_p';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  // url='http://www.citasmedicaspepitas.info/api/public/cita/citas/'
  // url2='http://www.citasmedicaspepitas.info/api/public/cita'

  url='http://localhost:8090/api/public/cita/citas/'
  url2='http://localhost:8090/api/public/cita'

  //urlAPI='http://www.citasmedicaspepitas.info/api/private/cita' 

  // url='http://localhost:8090/api/public/cita/citas/'
  // url2='http://localhost:8090/api/public/cita'

   urlAPI='http://192.168.100.5:8090/api/private/cita'

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  headers_obj = new HttpHeaders().set("Authorization","Bearer "+this.tokenService.getToken());

  getCitas(): Observable<any>{
    return this.http.get<any>(this.url+this.tokenService.getUserId())
  }

  getCita(id: number): Observable<any>{
    return this.http.get<any>(this.url2+'/'+id)
  }

  getCitaDetalle(id: number): Observable<any>{
    return this.http.get<any>(this.url2+'/cita_detalle/'+id)
  }

  // updateCita(id: number, estado: string): Observable<any>{
  //   console.log('DATOS CITA UPDATE: ',id, estado)
  //   return this.http.put<any>(this.urlAPI+'/update/'+id, estado, {headers: this.headers_obj})
  // }

  updateCita(cita: CitaPaciente): Observable<any>{
    return this.http.post<any>(this.urlAPI+'/update', cita, {headers: this.headers_obj})
  }
}
