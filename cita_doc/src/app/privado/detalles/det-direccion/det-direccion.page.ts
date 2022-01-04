import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Direccion } from 'src/app/models/Direccion';
import { DireccionPaciente } from 'src/app/models/Direccion_pac';
import { FormularioDireccionPaciente } from 'src/app/models/formularios/formularioDirPaciente';
import { DireccionService } from 'src/app/services/direccion.service';
import { TokenService } from 'src/app/services/token.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-det-direccion',
  templateUrl: './det-direccion.page.html',
  styleUrls: ['./det-direccion.page.scss'],
})
export class DetDireccionPage implements OnInit {

  idDireccion: number
  direccion: Direccion
  direccionP: DireccionPaciente
  formulario: FormularioDireccionPaciente

  constructor(private router: Router,
    private direccionService: DireccionService,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    public alertController: AlertController) { 

      this.formulario= new FormularioDireccionPaciente()
      this.direccion= new Direccion()
      this.direccionP = new DireccionPaciente()
      this.idDireccion=Number(this.route.snapshot.paramMap.get('idDireccion'));
      this.recuperarDireccionPaciente(this.idDireccion)
    }

  ngOnInit() {
  }

  recuperarDireccionPaciente(id: number){
    this.direccionService.getPacienteDireccion(id).subscribe((data: DireccionPaciente)=>{

      this.direccionP=JSON.parse(JSON.stringify(data));

      this.direccion=this.direccionP.direccion

    });

  }


  actualizarDireccion(){
    this.direccionService.updateDireccion(this.direccion).subscribe((data: Direccion)=>{
      console.log('Direccion actualizada: ', data)
      this.actualizarDireccionPaciente();

    });

  }

  actualizarDireccionPaciente(){

    this.formulario.idPacienteDireccion=this.direccionP.direccionPacienteId
    this.formulario.idDireccion=this.direccion.direccionId
    this.formulario.idPaciente=this.tokenService.getUserId()
    this.formulario.tipo= this.direccionP.tipo

    this.direccionService.updatePacienteDireccion(this.formulario).subscribe((data: DireccionPaciente)=>{
      console.log('Direccion paciente update: ', data)

      this.direccionP = new DireccionPaciente()
      this.direccion = new Direccion()

      this.direccionP = JSON.parse(JSON.stringify(data));
      this.direccion = this.direccionP.direccion

      this.formulario = new FormularioDireccionPaciente()
    });

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar dirección',
      message: '¿Seguro que quiere eliminar la dirección?',
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
            this.direccionService.deletePacienteDireccion(this.direccionP.direccionPacienteId).subscribe(data=>{});
            this.direccionService.deleteDireccion(this.direccion.direccionId).subscribe(data=>{});

            this.router.navigateByUrl('/det-dpersonales')
          }
        }
      ]
    });

    await alert.present();
  }

  volver(){
    this.router.navigateByUrl('/det-dpersonales')
  }



}
