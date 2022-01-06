import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/models/Cita';
import { CitasService } from 'src/app/services/citas.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CitaPaciente } from 'src/app/models/Cita_p';
@Component({
  selector: 'app-det-cita',
  templateUrl: './det-cita.page.html',
  styleUrls: ['./det-cita.page.scss'],
})
export class DetCitaPage implements OnInit {

  cita: Cita
  citaPaciente: CitaPaciente
  idCita: number

  constructor(private router: Router,
    private citaService: CitasService,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private toastController: ToastController) { 
      this.cita= new Cita()
      this.citaPaciente= new CitaPaciente()
      this.idCita= Number(this.route.snapshot.paramMap.get('idCita'));
      this.getCitaDetalle(this.idCita)
     
      
    }

  ngOnInit() {
    this.getCita(this.idCita)
  }

  getCita(id: number){
    this.citaService.getCita(id).subscribe((data: CitaPaciente)=>{
       this.citaPaciente=JSON.parse(JSON.stringify(data));
       console.log('Cita recuperada DATA: ', this.citaPaciente)
       console.log('ID CITA DATA: ',this.citaPaciente.citaId)
       console.log('Cita estado: ',this.citaPaciente.estado)
    });

  }

  getCitaDetalle(id: number){
    this.citaService.getCitaDetalle(id).subscribe((data: Cita)=>{
      this.cita=JSON.parse(JSON.stringify(data));
      console.log('Cita recuperada: ', this.cita)
    });
  }

  volver(){
    this.router.navigateByUrl('/tabs/citas')
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar cita',
      message: '¿Seguro que quiere cancelar su cita?',
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
            this.cancelar()
          }
        }
      ]
    });

    await alert.present();
  }

  cancelar(){
    this.citaPaciente.estado='cancelada'
    this.citaService.updateCita(this.citaPaciente).subscribe(data=>{
      this.citaPaciente= new CitaPaciente()

    },
    error => {
      if (error.status === 200) {

        this.presentToast('Exito', 'La cita se canceló correctamente', 'success');
        this.router.navigateByUrl('/tabs/citas')
      } else {
        this.presentToast('Fallo', 'No se pudo cancelar la cita', 'danger');
      }
    }
    
    );
  }

  async presentToast(header: string, mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color,
      header: header
    });
    toast.present();
  }

  

}
