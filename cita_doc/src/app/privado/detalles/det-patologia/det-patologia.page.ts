import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfermedad } from 'src/app/models/Enfermedad';
import { FormularioRegistroPatologia } from 'src/app/models/formularios/formularioRegPatologia';
import { PacientePatologia } from 'src/app/models/Paciente_Patol';
import { EnfermedadService } from 'src/app/services/enfermedad.service';
import { PatologiaService } from 'src/app/services/patologia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-det-patologia',
  templateUrl: './det-patologia.page.html',
  styleUrls: ['./det-patologia.page.scss'],
})
export class DetPatologiaPage implements OnInit {

  idPatologia: number;
  private patologia: PacientePatologia
  private enfermedadP: Enfermedad
  private formulario: FormularioRegistroPatologia

  constructor(private route: ActivatedRoute,
    public router: Router,
    private patologiaService: PatologiaService,
    private tokenService: TokenService,
    private enfermedadService: EnfermedadService) {

    this.formulario = new FormularioRegistroPatologia()

    this.enfermedadP = new Enfermedad()
    this.patologia = new PacientePatologia()
    this.idPatologia = Number(this.route.snapshot.paramMap.get('idPatologia'));
  }

  ngOnInit() {
    console.log('ID RECUPERADO: ', this.idPatologia)
    this.recuperarPatologia()
  }

  recuperarPatologia() {
    this.patologiaService.getPatologia(this.idPatologia).subscribe((data: PacientePatologia) => {
      this.patologia = JSON.parse(JSON.stringify(data));
      this.enfermedadP= this.patologia.enfermedad

      
      console.log('Enfermedad get: ', this.enfermedadP)
      console.log('Patologia get: ', this.patologia)
    });
  }

  actualizarP() {

    console.log('Patologia previa act: ', this.patologia)
    this.formulario.idPaciente=this.tokenService.getUserId()
    this.formulario.idEnfermedad=this.patologia.enfermedad.enfermedadId
    this.formulario.tipo = this.patologia.tipo
    this.formulario.idPcientePatologia = this.patologia.pacientePatologiaId

    console.log('Formulario: ', this.formulario)

    this.patologiaService.updatePatologia(this.formulario).subscribe((data: PacientePatologia)=>{
      console.log('Patologia actualizada: ', data)
      this.patologia= new PacientePatologia()
      this.enfermedadP = new Enfermedad()
      this.patologia=JSON.parse(JSON.stringify(data));
      this.enfermedadP=this.patologia.enfermedad
      this.formulario= new FormularioRegistroPatologia()
    });

  }

  actualizarE(){
    this.enfermedadService.updateEnfermedad(this.enfermedadP).subscribe((data: Enfermedad)=>{
      console.log('Enfermedad actualizada: ', data)
      this.actualizarP()
    });
  }

  volver(){
    this.router.navigateByUrl('/tabs/perfil')
  }

}
