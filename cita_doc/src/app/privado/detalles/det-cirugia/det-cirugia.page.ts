import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cirugia } from 'src/app/models/Cirugia';
import { IonDatetime } from '@ionic/angular';
import { PacienteCirugia } from 'src/app/models/Paciente_cirg';
import { CirugiaService } from 'src/app/services/cirugia.service';
import { format, parseISO } from 'date-fns';
import { AlertController } from '@ionic/angular';
import { TokenService } from 'src/app/services/token.service';
import { FormularioPacienteCirugia } from 'src/app/models/formularios/formularioRegPacCirg';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-det-cirugia',
  templateUrl: './det-cirugia.page.html',
  styleUrls: ['./det-cirugia.page.scss'],
})
export class DetCirugiaPage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  idCirugia: number
  errMessage = ''
  pacienteCirugia: PacienteCirugia
  cirugia: Cirugia
  formulario: FormularioPacienteCirugia
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cirugiaService: CirugiaService,
    public alertController: AlertController,
    private tokenService: TokenService,
    private toastController: ToastController) {
    this.cirugia = new Cirugia()
    this.pacienteCirugia = new PacienteCirugia()
    this.formulario = new FormularioPacienteCirugia()
    this.idCirugia = Number(this.route.snapshot.paramMap.get('idCirugia'));
  }

  ngOnInit() {
    this.recuperarCirugia(this.idCirugia)
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

  recuperarCirugia(id: number) {
    this.cirugiaService.getPacienteCirugia(id).subscribe((data: PacienteCirugia) => {
      this.pacienteCirugia = JSON.parse(JSON.stringify(data));
      this.cirugia = this.pacienteCirugia.cirugia


      console.log('Paciente cirugia get: ', this.pacienteCirugia)
      console.log('Cirugia get: ', this.cirugia)
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar cirugía',
      message: '¿Seguro que quiere eliminar la cirugía?',
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
            this.eliminar()
            
          }
        }
      ]
    });

    await alert.present();
  }

  eliminar() {
    this.cirugiaService.deleteCirugiaPaciente(this.pacienteCirugia.pacienteCirugiaId).subscribe(data => {
     
    },
      error => {
        if (error.status === 200) {

          this.presentToast('Exito', 'La cirugía se eliminó correctamente', 'success');
          this.router.navigateByUrl('/perfil')
        } else {
          this.presentToast('Fallo', 'No se pudo eliminar la cirugía', 'danger');
        }
      }
    );

    //this.cirugiaService.deleteCirugia(this.cirugia.cirugiaId).subscribe(data=>{});


  }



  actualizarCirugia() {
    this.cirugiaService.updateCirugia(this.cirugia).subscribe((data: Cirugia) => {
      console.log('Cirugia actualizada: ', data)
      this.actualizarCirugiaPaciente()

    });

  }

  actualizarCirugiaPaciente() {
    this.formulario.idPacienteCirugia = this.pacienteCirugia.pacienteCirugiaId
    this.formulario.idCirugia = this.cirugia.cirugiaId
    this.formulario.idPaciente = this.tokenService.getUserId()
    this.formulario.tipo = this.pacienteCirugia.tipo

    console.log('Formulario paciente cirugia: ', this.formulario)
    this.cirugiaService.updateCirugiaPaciente(this.formulario).subscribe((data: PacienteCirugia) => {
      this.pacienteCirugia = new PacienteCirugia()
      this.cirugia = new Cirugia()
      this.pacienteCirugia = JSON.parse(JSON.stringify(data));
      this.cirugia = this.pacienteCirugia.cirugia
      this.formulario = new FormularioPacienteCirugia()
      console.log('Paciente cirguria update: ', this.pacienteCirugia)
    });


  }


  volver() {
    this.router.navigateByUrl('/tabs/perfil')
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
