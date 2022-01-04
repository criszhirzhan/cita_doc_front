import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cirugia } from '../models/Cirugia';
import { FormularioPacienteCirugia } from '../models/formularios/formularioRegPacCirg';
import { PacienteCirugia } from '../models/Paciente_cirg';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CirugiaService {

  url='http://localhost:8090/cirugia'
  urlPc='http://localhost:8090/paciente_cirugia'

  constructor(private http: HttpClient, private tokenService: TokenService) { }


  getPacienteCirugia(id: number): Observable<any>{
    return this.http.get<any>(this.urlPc+'/'+id)
  }

  guardarCirugia(cirugia: Cirugia): Observable<any>{
    return this.http.post<any>(this.url, cirugia)
  }
  
  guardarPCirugia(formulario: FormularioPacienteCirugia): Observable<any>{
    return this.http.post<any>(this.urlPc, formulario)
  }


}
