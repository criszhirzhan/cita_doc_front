import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { closestTo } from 'date-fns';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/models/Cita';
import { CitasService } from 'src/app/services/citas.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  citasList: Observable<any[]>;
  citas: Cita[]=[]
  cita: Cita = new Cita()
  filtradoC: string

  constructor(private tokenService: TokenService, 
    private citasService: CitasService,
    private router: Router) { }

  ngOnInit() {
    console.log('token id: ', this.tokenService.getUserId());
    this.listarCitas()
  }

  ionViewWillEnter(){
    console.log('Refrescando: ')
    this.listarCitas(); 
   }

  listarCitas(){
    this.citasService.getCitas().subscribe((data:Cita)=>{
      this.citas=JSON.parse(JSON.stringify(data));
    });
  }


  verCita(idCita: number){
    console.log('Id cita: ', idCita)
    const url = '/tabs/citas/det-cita/' + idCita;
    this.router.navigateByUrl(url)
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
