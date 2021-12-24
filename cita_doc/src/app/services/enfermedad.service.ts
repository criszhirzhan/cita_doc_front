import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermedad } from '../models/enfermedad';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  url='http://localhost:8090/api/private/enfermedad'

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }


  headers_obj = new HttpHeaders().set("Authorization","Bearer "+this.tokenService.getToken());  

  addEnfermedad(enfermedad: Enfermedad): Observable<any>{

    return this.http.post<any>(this.url, enfermedad, {headers: this.headers_obj});

  }

  
  updateEnfermedad(enfermedad: Enfermedad): Observable<any>{

    return this.http.put<any>(this.url+'/update/'+enfermedad.enfermedadId, enfermedad, {headers: this.headers_obj});

  }
}
