import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { Direccion } from '../models/Direccion';
import { FormularioDireccionPaciente } from '../models/formularios/formularioDirPaciente';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  // urlDireccion='http://www.citasmedicaspepitas.info/api/public/direccion'
  // urlDirPac='http://www.citasmedicaspepitas.info/paciente_direccion'

  urlDireccion='http://localhost:8090/api/public/direccion'
  urlDirPac='http://localhost:8090/paciente_direccion'

  

  constructor(private http: HttpClient,
    private tokenService: TokenService) { }

  guardarDireccion(direccion: Direccion): Observable<any>{
    return this.http.post<any>(this.urlDireccion, direccion)
  }

  guardarDireccionPaciente(formulario: FormularioDireccionPaciente){
    console.log('Formulario Direccion Paciente: ', formulario)
    return this.http.post<any>(this.urlDirPac, formulario)
  }

  getPacienteDireccion(id: number){
    return this.http.get<any>(this.urlDirPac+'/'+id)
  }

  updatePacienteDireccion(formulario: FormularioDireccionPaciente){
    return this.http.post<any>(this.urlDirPac+'/update/', formulario)

  }

  updateDireccion(direccion: Direccion){
    return this.http.post<any>(this.urlDireccion+'/update', direccion)
  }

  deletePacienteDireccion(id: number){
    console.log('Eliminando direccion paciente id: ', id)
    return this.http.post<any>(this.urlDirPac+'/delete',id)
  }

  deleteDireccion(id: number){
    console.log('Eliminando direccion id: ', id)
    return this.http.post<any>(this.urlDireccion+'/delete',id)
  }

}
