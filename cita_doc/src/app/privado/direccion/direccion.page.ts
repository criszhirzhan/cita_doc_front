import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direccion } from 'src/app/models/Direccion';
import { DireccionPaciente } from 'src/app/models/Direccion_pac';
import { FormularioDireccionPaciente } from 'src/app/models/formularios/formularioDirPaciente';
import { DireccionService } from 'src/app/services/direccion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})
export class DireccionPage implements OnInit {

  direccion: Direccion
  direccionP: DireccionPaciente
  formulario: FormularioDireccionPaciente

  constructor(private router: Router,
    private direccionService: DireccionService,
    private tokenService: TokenService) { 
      this.direccion= new Direccion()
      this.direccionP = new DireccionPaciente()
      this.formulario = new FormularioDireccionPaciente()

      
    }

  ngOnInit() {
  }

  
 ionViewWillEnter(){
  this.direccion= new Direccion()
  this.direccionP = new DireccionPaciente()
  this.formulario = new FormularioDireccionPaciente()
 }

  volver(){
    this.router.navigateByUrl('/tabs/perfil/det-dpersonales')
  }

  addDireccion(){
    
    this.direccionService.guardarDireccion(this.direccion).subscribe((data: Direccion)=>{
      this.direccion = new Direccion()

     // this.direccion=JSON.parse(JSON.stringify(data));

      console.log('Direccion creada: ', JSON.parse(JSON.stringify(data)))
      this.addDireccionPaciente(JSON.parse(JSON.stringify(data)))

      this.direccion= new Direccion()

    });
  }

  addDireccionPaciente(id: number){
    console.log('ID DIRECCION: ',id)
    this.formulario.idDireccion=id
    this.formulario.idPaciente=Number(this.tokenService.getUserId())

    this.direccionService.guardarDireccionPaciente(this.formulario).subscribe((data: DireccionPaciente)=>{

      this.formulario = new FormularioDireccionPaciente()

      console.log('Registro direccion paciente: ', data)
    });

  }

}
