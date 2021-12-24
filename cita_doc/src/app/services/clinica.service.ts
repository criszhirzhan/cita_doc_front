import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clinica } from '../models/clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  clinicasApi = 'http://localhost:8090/clinica';
  constructor(
    private http: HttpClient
  ) { }
  
  /*Lista todas las clinicas */
  getAllClinicas(): Observable<Clinica>{
    return this.http.get<Clinica>(this.clinicasApi);
  }
}
