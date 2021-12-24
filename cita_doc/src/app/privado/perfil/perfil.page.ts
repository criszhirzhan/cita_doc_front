import { TagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  //pacientes: Paciente[]=[];
  paciente: Paciente;
  tamdirecciones: number;
  tamcirugias: number;
  tampatologias: number;
  filtradoP: string;

  constructor(private router: Router, 
    private servicePaciente: PacienteService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.paciente= new Paciente()
    this.getPerfil();
    
  }

  getPerfil(){
    this.servicePaciente.getPacienteJSON().subscribe((data: Paciente)=>{
      this.paciente = JSON.parse(JSON.stringify(data));
      this.validarDatos(this.paciente);
      console.log('Paciente: ',this.paciente)
    });
  }

  validarDatos(paciente: Paciente){

    this.tamdirecciones=paciente.direccionPacientes.length
    this.tampatologias=paciente.pacientePatologias.length
    
    this.tamcirugias=paciente.pacienteCirugias.length
    //this.tampatologias=paciente.pacientePatologias.length

  }

  cirugias(){
    this.router.navigateByUrl('/cirugia')
  }

  patologias(){
    this.router.navigateByUrl('/patologia')
  }

  ver(idPatologia: number){
    console.log('Id patologia: ', idPatologia)
    const url = 'det-patologia/' + idPatologia;
    this.router.navigateByUrl(url)

  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Seleccione su tipo de sangre',
      inputs: [
        {
          type: 'radio',
          label: 'A+',
          value: 'A+'
        },
        {
          type: 'radio',
          label: 'A-',
          value: 'A-'
        },
        {
          type: 'radio',
          label: 'B+',
          value: 'B+'
        },
        {
          type: 'radio',
          label: 'B-',
          value: 'B-'
        },
        {
          type: 'radio',
          label: 'O+',
          value: 'O+'
        },
        {
          type: 'radio',
          label: 'O-',
          value: 'O-'
        },
        {
          type: 'radio',
          label: 'AB+',
          value: 'AB+'
        },
        {
          type: 'radio',
          label: 'AB-',
          value: 'AB-'
        }
   
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data  => {
            console.log('Confirm Ok');
            console.log('Tipo sangre: ', data);
            
           // this.moneda.url=data.URL;
          }
        }
      ]
    });
  
    await alert.present();
  }

  verDatosPersonales(){
    this.router.navigateByUrl('/det-dpersonales')
  }

  
}
