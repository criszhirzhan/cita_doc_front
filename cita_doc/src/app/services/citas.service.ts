import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url='http://localhost:8090/api/public/cita/citas/'
  url2='http://localhost:8090/api/public/cita'


  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getCitas(): Observable<any>{
    return this.http.get<any>(this.url+this.tokenService.getUserId())
  }

  getCita(id: number): Observable<any>{
    return this.http.get<any>(this.url2+'/'+id)
  }

  getCitaDetalle(id: number): Observable<any>{
    return this.http.get<any>(this.url2+'/cita_detalle/'+id)
  }
}
