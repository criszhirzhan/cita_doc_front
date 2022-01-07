import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-det-dpersonales',
  templateUrl: './det-dpersonales.page.html',
  styleUrls: ['./det-dpersonales.page.scss'],
})
export class DetDpersonalesPage implements OnInit {

  paciente: Paciente
  dateValue: string;

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;


  constructor(private router: Router,
    private pacienteService: PacienteService,
    public alertController: AlertController, 
    private direccionService: DireccionService) { 
      this.paciente= new Paciente()
      this.dateValue=' '
    }

  ngOnInit() {
    this.getPerfil()
    console.log('Paciente: ', this.paciente)

  }

  
 ionViewWillEnter(){
  
  console.log('Refrescando')
  this.getPerfil(); 
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

  getPerfil(){
    this.pacienteService.getPacienteJSON().subscribe((data: Paciente)=>{
      this.paciente = JSON.parse(JSON.stringify(data));
      
    });
  }

  agregarDireccion(){
    this.router.navigateByUrl('/tabs/perfil/det-dpersonales/direccion')
  }

  verDireccion(idDireccion: number){
    console.log('Id direccion: ', idDireccion)
    const url = '/tabs/perfil/det-dpersonales/det-direccion/' + idDireccion;
    this.router.navigateByUrl(url)
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva dirección',
      inputs: [
        {
          name: 'pais',
          type: 'text',
          placeholder: 'Ingrese país'
        },
        {
          name: 'provincia',
          type: 'text',
          placeholder: 'Ingrese provincia'
        },
        // multiline input.
        {
          name: 'callePrincipal',
          type: 'text',
          placeholder: 'Ingrese calle principal'
        },
        {
          name: 'calleSecundaria',
          type: 'text',
          placeholder: 'Ingrese calle secundaria'
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
          handler: data => {
            console.log('Confirm Ok');
            console.log('Direccion Pais: ',data['pais'])

          }
        }
      ]
    });

    await alert.present();
  }

  actualizarPaciente(){
    this.pacienteService.updatePaciente(this.paciente).subscribe((data: Paciente)=>{
      this.paciente= new Paciente()
      this.paciente=JSON.parse(JSON.stringify(data));
      console.log('Paciente actualizado: ', this.paciente)

    });

  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getPerfil()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
