import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cirugia } from 'src/app/models/Cirugia';
import { IonDatetime } from '@ionic/angular';
import { PacienteCirugia } from 'src/app/models/Paciente_cirg';
import { CirugiaService } from 'src/app/services/cirugia.service';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-det-cirugia',
  templateUrl: './det-cirugia.page.html',
  styleUrls: ['./det-cirugia.page.scss'],
})
export class DetCirugiaPage implements OnInit {

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  idCirugia: number
  pacienteCirugia: PacienteCirugia
  cirugia: Cirugia
  constructor(private router: Router,
    private route: ActivatedRoute,
    private cirugiaService: CirugiaService) { 
      this.cirugia = new Cirugia()
      this.pacienteCirugia = new PacienteCirugia()
      this.idCirugia=Number(this.route.snapshot.paramMap.get('idCirugia'));
    }

  ngOnInit() {
    this.recuperarCirugia(this.idCirugia)
  }

  updateCirugiaP(){
    console.log('Actualizando ....')
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
      this.cirugia= this.pacienteCirugia.cirugia

      
      console.log('Paciente cirugia get: ', this.pacienteCirugia)
      console.log('Cirugia get: ', this.cirugia)
    });
  }

  volver(){
    this.router.navigateByUrl('/tabs/perfil')
  }



}
