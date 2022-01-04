import { Component, OnInit, ViewChild } from '@angular/core';
import { format, parseISO } from 'date-fns';
import { IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
import { CirugiaService } from 'src/app/services/cirugia.service';
import { Cirugia } from 'src/app/models/Cirugia';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteCirugia } from 'src/app/models/Paciente_cirg';
import { FormularioPacienteCirugia } from 'src/app/models/formularios/formularioRegPacCirg';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-cirugia',
  templateUrl: './cirugia.page.html',
  styleUrls: ['./cirugia.page.scss'],
})
export class CirugiaPage implements OnInit {

  dateValue = '';
  cirugia: Cirugia;
  paciente: Paciente
  formularioPC: FormularioPacienteCirugia
 

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;




  constructor(private router: Router, 
    private cirugiaService: CirugiaService,
    private tokerService: TokenService) {
      this.cirugia = new Cirugia()
      this.paciente= new Paciente()
      this.formularioPC = new FormularioPacienteCirugia()
     
     }

  ngOnInit() {
  }

  confirm() {
    this.datetime.confirm();
  }

  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'yyyy-MM-dd');
  } 

  volver(){
    this.router.navigateByUrl('/tabs/perfil')
  }


  addCirugia(){
   // console.log('Guardar: ', this.dateValue)
    this.cirugia.fechaProcedimiento=this.dateValue;

    console.log('Cirugia generada: ',this.cirugia)
    this.cirugiaService.guardarCirugia(this.cirugia).subscribe((data: Cirugia)=>{
      this.cirugia= new Cirugia()
      this.cirugia=JSON.parse(JSON.stringify(data));
     
      this.addPacienteCirugia(Number(this.cirugia.cirugiaId))
     // this.paciente.pacienteCirugias.push(this.cirugia)

      
      console.log('Cirugia recuperada DDBB: ', this.cirugia)
      this.cirugia= new Cirugia()
    });
  }

  addPacienteCirugia(id: number){
    this.formularioPC.idCirugia=id
    this.formularioPC.idPaciente=this.tokerService.getUserId()

    this.cirugiaService.guardarPCirugia(this.formularioPC).subscribe((data)=>{

      console.log('Paciente cirugia agregado: ',data)
      this.formularioPC= new FormularioPacienteCirugia()
    });

  }

}
