import { Component, OnInit } from '@angular/core';
import { closestTo } from 'date-fns';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/models/cita';
import { CitasService } from 'src/app/services/citas.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  citasList: Observable<any[]>;
  citas: Cita[]=[]
  cita: Cita = new Cita()

  constructor(private tokenService: TokenService, private citasService: CitasService) { }

  ngOnInit() {
    console.log('token id: ', this.tokenService.getUserId());
    this.listarCitas()
  }

  async listarCitas(){

    return this.citasService.getCitas().subscribe(data=>{
      this.citasList=data

      console.log(data)

      this.citasList.forEach( cita =>{
        this.cita.idCita=cita['citaId']
        this.cita.clinica=cita['clinica']
        this.cita.medico=cita['medico']
        this.cita.sintomas=cita['sintomas']
        this.cita.fecha=cita['fechaCita']
        this.citas.push(this.cita);
        this.cita=new Cita();

      });

      console.log(this.citas)

    });
  }

}
