import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Enfermedad } from 'src/app/models/Enfermedad';
import { FormularioRegistroPatologia } from 'src/app/models/formularios/formularioRegPatologia';
import { Paciente } from 'src/app/models/Paciente';
import { PacientePatologia } from 'src/app/models/Paciente_Patol';
import { EnfermedadService } from 'src/app/services/enfermedad.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PatologiaService } from 'src/app/services/patologia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.page.html',
  styleUrls: ['./patologia.page.scss'],
})
export class PatologiaPage implements OnInit {


  enfermedadP: Enfermedad;
  formulario: FormularioRegistroPatologia;
  patologia: PacientePatologia;
  paciente: Paciente;
  p: Paciente;

  constructor(private http: HttpClient, 
    private enfermedadService: EnfermedadService,
    private toastCtrl: ToastController,
    private patologiaService: PatologiaService,
    private tokenService: TokenService,
    private pacienteService: PacienteService,
    private router: Router) { }

  ngOnInit() {
    this.formulario=new FormularioRegistroPatologia()
    this.enfermedadP= new Enfermedad()
    this.patologia= new PacientePatologia()
    this.paciente= new Paciente()
    this.p= new Paciente()
  
  }

  guardarPatologia(id: number){
    this.formulario.idPaciente=Number(this.tokenService.getUserId())
    this.formulario.idEnfermedad=Number(id)

    console.log('Formulario: ',this.formulario)
    this.patologiaService.addPatologia(this.formulario).subscribe(data=>{
     this.patologia=JSON.parse(JSON.stringify(data));

     
      //this.paciente=this.recuperarPaciente();

     // this.paciente.pacientePatologias.push(this.patologia)
      console.log('Paciente update: ',this.paciente)
     // this.paciente.pacientePatologias.push(this.patologia)
      // this.patologia=new PacientePatologia()
      // this.formulario = new FormularioRegistroPatologia()
      this.volver()
      console.log('Patologia creada: ',data)
    });

  }

  guardarEnfermedad(){
    console.log(this.enfermedadP)
    var id=0;
    this.enfermedadService.addEnfermedad(this.enfermedadP).subscribe((res)=>{
      this.enfermedadP = new Enfermedad();
      id = JSON.parse(JSON.stringify(res));

      this.guardarPatologia(id)

      console.log('ID ', id)
      /*Esto es para poder agregar la direccion de la clinica */
      //const url = '/tabs/clinicas/'+id;
      //this.router.navigate([url]);
    }, error=>{
      if(error.status === 201){
        this.presentToastOptions('Exito', 'Enfermedad registrada con exito');
      }else{
        this.presentToastOptions('Error', 'Algo salio mal');
      }
    });

  }


  recuperarPaciente(){
    
    this.pacienteService.getPacienteJSON().subscribe((data: Paciente)=>{
     
      this.p = JSON.parse(JSON.stringify(data));
      console.log('Paciente: ',this.paciente)
    });

    return this.p

  }

  async presentToastOptions(header: string, message: string){
    const toast = await this.toastCtrl.create({
      header: header,
      message: message,
      position: 'top',
      duration: 2000
    });
    await toast.present();
  }

  volver(){
    
    this.router.navigateByUrl('/tabs/perfil')
  }

}
