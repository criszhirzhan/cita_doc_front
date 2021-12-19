import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenService } from 'src/app/services/token.service';
import { Medico } from 'src/app/models/medico';


@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.page.html',
  styleUrls: ['./doctores.page.scss'],
})
export class DoctoresPage implements OnInit {

  medList: Observable<any[]>;
  medico: Medico=new Medico();
  medicos: Medico[]=[]

  constructor(private tokenService: TokenService, private doctorService: DoctorService) { }

  ngOnInit() {
    this.listarDoctores()
  }

  async listarDoctores(){
    return this.doctorService.getDoctores().subscribe(data=>{
      this.medList=data

      console.log(data)

      this.medList.forEach( medico =>{
        this.medico.id=medico['usuarioId']
        this.medico.nombres=medico['nombre']
        this.medico.apellidos=medico['apellido']
        this.medico.email=medico['email']
        this.medico.descripcion=medico['descripcion']
        this.medico.estado=medico['estado']
        this.medico.numeroContacto=medico['numeroContacto']
        this.medicos.push(this.medico);
        this.medico=new Medico();
      });

    });

  }

}

  

