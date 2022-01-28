import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermedad } from '../models/Enfermedad';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  // url='http://www.citasmedicaspepitas.info/api/private/enfermedad'
  url='http://localhost:8090/api/private/enfermedad'
  
  constructor(private http: HttpClient,
    private tokenService: TokenService) { }


  headers_obj = new HttpHeaders().set("Authorization","Bearer "+this.tokenService.getToken());  

  addEnfermedad(enfermedad: Enfermedad): Observable<any>{

    return this.http.post<any>(this.url, enfermedad, {headers: this.headers_obj});

  }

  
  updateEnfermedad(enfermedad: Enfermedad): Observable<any>{

    return this.http.post<any>(this.url+'/update', enfermedad, {headers: this.headers_obj});

  }
}
