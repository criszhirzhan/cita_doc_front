import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Paciente } from 'src/app/models/Paciente';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  dateValue = '';

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  signupForm2: FormGroup;
  submitted2 = false;

  constructor(private registroService: RegistroService,
    private router: Router,
    public toastController: ToastController) { }
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
   // this.paciente.fechaNacimiento=this.dateValue

    //console.log('Paciente')

    

    // console.log('Paciente creado: ',this.paciente)
     this.registroService.registrarPaciente(this.paciente).subscribe((res)=>{
       this.paciente= new Paciente()
       console.log('status: ', res.status);
      }, error=>{
       if(error.status === 201){
         
        this.presentToast('Exito', 'Usted ha sido registrado','success');
        this.volver()
      }else{
         this.presentToast('Error', 'Algo salio mal','danger');
     }
     });

  }

  volver(){
    this.paciente= new Paciente()
    this.router.navigateByUrl('/login')
  }

  // async presentToastOptions(header: string, message: string){
  //   const toast = await this.toastCtrl.create({
  //     header: header,
  //     message: message,
  //     position: 'top',
  //     duration: 2000
  //   });
  //   await toast.present();
  // }

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


