import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from 'src/app/services/doctor.service';
import { TokenService } from 'src/app/services/token.service';
import { Medico } from 'src/app/models/Medico';
import { Clinica } from 'src/app/models/Clinica';
import { ClinicaService } from 'src/app/services/clinica.service';
import { Router } from '@angular/router';


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

  constructor(private tokenService: TokenService, 
    private doctorService: DoctorService,
    private clinicaService: ClinicaService,
    private router: Router) { }

  ngOnInit() {
    this.listarDoctores()
    this.getClinicas();

  }

  getClinicas() {
    this.clinicaService.getAllClinicas().subscribe((data: Clinica) => {
      this.clinicas = JSON.parse(JSON.stringify(data));
    })
  }


  listarDoctores(){
    this.doctorService.getDoctores().subscribe((data: Medico)=>{
      this.medicos= JSON.parse(JSON.stringify(data));
      console.log(this.medicos)
    });

  }


  verMedico(idMedico: number){
    console.log('Id medico: ', idMedico)
    const url = '/tabs/doctores/det-medico/' + idMedico;
    this.router.navigateByUrl(url)
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}



