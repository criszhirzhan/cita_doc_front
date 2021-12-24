import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url='http://localhost:8090/api/public/medico'

  constructor(private http: HttpClient) { }

  getDoctores(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  getDoctoresClinica(idClinicca: number): Observable<any>{
    return this.http.get<any>(this.url+'/clinica/'+idClinicca)
  }


}
