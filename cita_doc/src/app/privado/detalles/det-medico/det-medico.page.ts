import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-det-medico',
  templateUrl: './det-medico.page.html',
  styleUrls: ['./det-medico.page.scss'],
})
export class DetMedicoPage implements OnInit {



  idMedico:number
  medico: Medico
  tamEspecialidades: number
  tamSubespecialidades: number

  constructor(private router: Router,
    private route: ActivatedRoute,
    private medicoService: DoctorService) { 

      this.medico= new Medico()

    this.idMedico=Number(this.route.snapshot.paramMap.get('idMedico'));
    this.getMedico(this.idMedico)
  }

  ngOnInit() {
  }


  volver(){
    this.router.navigateByUrl('/tabs/doctores')
  }

  getMedico(idMedico: number){
    this.medicoService.getMedico(idMedico).subscribe((data: Medico)=>{
      this.medico= JSON.parse(JSON.stringify(data));
      this.validarDatos(this.medico)
    });

  }

  validarDatos(medico: Medico){
    this.tamEspecialidades=medico.especialidades.length
    this.tamSubespecialidades=medico.subespecialidades.length

  }

}
