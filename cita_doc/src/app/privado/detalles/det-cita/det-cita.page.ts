import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/models/Cita';
import { CitasService } from 'src/app/services/citas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-det-cita',
  templateUrl: './det-cita.page.html',
  styleUrls: ['./det-cita.page.scss'],
})
export class DetCitaPage implements OnInit {

  cita: Cita
  idCita: number

  constructor(private router: Router,
    private citaService: CitasService,
    private route: ActivatedRoute,
    public alertController: AlertController) { 
      this.cita= new Cita()
      this.idCita= Number(this.route.snapshot.paramMap.get('idCita'));
      this.getCitaDetalle(this.idCita)
      
    }

  ngOnInit() {
  }

  getCita(id: number){
    this.citaService.getCita(id).subscribe((data: Cita)=>{
      // this.cita=JSON.parse(JSON.stringify(data));
      // console.log('Cita recuperada: ', this.cita)
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
          }
        }
      ]
    });

    await alert.present();
  }

}
