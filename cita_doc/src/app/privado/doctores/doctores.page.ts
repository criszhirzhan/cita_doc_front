import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenService } from 'src/app/services/token.service';
import { Medico } from 'src/app/models/medico';
import { Clinica } from 'src/app/models/clinica';
import { ClinicaService } from 'src/app/services/clinica.service';


@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.page.html',
  styleUrls: ['./doctores.page.scss'],
})
export class DoctoresPage implements OnInit {

  medList: Observable<any[]>;
  medico: Medico = new Medico();
  medicos: Medico[] = []
  filterTerm: string;
  clinicas: Clinica[] = [];
  idClinica: number;

  constructor(private tokenService: TokenService, private doctorService: DoctorService,
    private clinicaService: ClinicaService) { }

  ngOnInit() {
    this.listarDoctores()
    this.getClinicas();

  }

  getClinicas() {
    this.clinicaService.getAllClinicas().subscribe((data: Clinica) => {
      this.clinicas = JSON.parse(JSON.stringify(data));
    })
  }



  async listarDoctores() {
    return this.doctorService.getDoctores().subscribe(data => {
      this.medList = data
      this.medicos = []
      console.log(data)

      this.medList.forEach(medico => {
        this.medico.id = medico['usuarioId']
        this.medico.nombres = medico['nombre']
        this.medico.apellidos = medico['apellido']
        this.medico.email = medico['email']
        this.medico.descripcion = medico['descripcion']
        this.medico.estado = medico['estado']
        this.medico.numeroContacto = medico['numeroContacto']
        this.medicos.push(this.medico);
        this.medico = new Medico();
      });

    });

  }

  async listarDoctoresClinica() {
    if(this.idClinica!==0){
      return this.doctorService.getDoctoresClinica(this.idClinica).subscribe(data => {
        console.log('Medicos por clinica: ', data);
        this.medList = data
        this.medicos = []
        console.log(data)
  
        this.medList.forEach(medico => {
          this.medico.id = medico['usuarioId']
          this.medico.nombres = medico['nombre']
          this.medico.apellidos = medico['apellido']
          this.medico.email = medico['email']
          this.medico.descripcion = medico['descripcion']
          this.medico.estado = medico['estado']
          this.medico.numeroContacto = medico['numeroContacto']
          this.medicos.push(this.medico);
          this.medico = new Medico();
        });
  
      });

    }else{
      this.listarDoctores()
    }
  }



}



