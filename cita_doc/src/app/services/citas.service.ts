import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url='http://localhost:8090/api/public/cita/citas/'
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getCitas(): Observable<any>{
    return this.http.get<any>(this.url+this.tokenService.getUserId())
  }
}
