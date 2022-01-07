
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { AlertController } from '@ionic/angular';
import { TokenService } from 'src/app/services/token.service';



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
    public alertController: AlertController,
    public tokenService: TokenService) { }

  ngOnInit() {
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.paciente= new Paciente()
    this.getPerfil();
    
  }

 ionViewWillEnter(){
  
   console.log('Refrescando')
   this.getPerfil(); 
  }

  //  ionViewDidEnter(){
  //    console.log('ViewDIDEnter')
  //  }

  //  ionViewWillLeave(){
  //    console.log('ionViewWillLeave')
  //  }

  //  ionViewDidLeave(){
  //   console.log('ionViewDidLeave')
  //  }

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

    this.router.navigateByUrl('/tabs/perfil/cirugia')
  }

  patologias(){
    this.router.navigateByUrl('/tabs/perfil/patologia')
  }

  ver(idPatologia: number){
    console.log('Id patologia: ', idPatologia)
    const url = '/tabs/perfil/det-patologia/' + idPatologia;
    this.router.navigate([url]);
  }

  verDireccion(idDireccion: number){
    console.log('Id direccion: ', idDireccion)
    const url = '/tabs/perfil/det-direccion/' + idDireccion;
    this.router.navigateByUrl(url)
  }

  verCirugia(idCirugia: number){
    console.log('Id cirugia: ', idCirugia)
    const url = '/tabs/perfil/det-cirugia/' + idCirugia;
    this.router.navigateByUrl(url)
  }

  updateTipoSangre(paciente: Paciente){
    this.servicePaciente.updatePaciente(paciente).subscribe((data: Paciente)=>{
      this.paciente= new Paciente()
      this.paciente=JSON.parse(JSON.stringify(data));
      console.log('Paciente actualizado: ', this.paciente)

    });

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
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: data  => {
            console.log('Confirm Ok');
            console.log('Tipo sangre: ', data);
            this.paciente.tipoSangre=data
            console.log('Paciente actual: ',this.paciente)
            this.updateTipoSangre(this.paciente)
           // this.moneda.url=data.URL;
          }
        }
      ]
    });
  
    await alert.present();
  }

  verDatosPersonales(){
    this.router.navigateByUrl('/tabs/perfil/det-dpersonales')
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar sesión',
      message: '¿Seguro que quiere cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            this.cerrarSesion()
          }
        }
      ]
    });

    await alert.present();
  }

  cerrarSesion(){
    this.tokenService.logOut()
    this.router.navigateByUrl('/login')
  }

  
}
