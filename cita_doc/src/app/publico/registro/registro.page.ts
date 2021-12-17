import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Paciente } from 'src/app/models/paciente';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  dateValue = '';
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  constructor(private registroService: RegistroService) { }
  paciente : Paciente = new Paciente(); 
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

  guardarPaciente(){
    //console.log('Guardando paciente')
    //console.log('Fecha Nacimiento')
    //console.log(this.dateValue)
    this.paciente.fechaNacimiento=this.dateValue

    //console.log('Paciente')
    console.log(this.paciente)

    this.registroService.registrarPaciente(this.paciente).subscribe(res=>{
      alert(res);
    })

  }

}
