import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinica } from '../models/Clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  clinicasApi = 'http://localhost:8090/api/public/clinica';
  constructor(
    private http: HttpClient
  ) { }
  
  /*Lista todas las clinicas */
  getAllClinicas(): Observable<Clinica>{
    return this.http.get<Clinica>(this.clinicasApi);
  }
}
