import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-det-dpersonales',
  templateUrl: './det-dpersonales.page.html',
  styleUrls: ['./det-dpersonales.page.scss'],
})
export class DetDpersonalesPage implements OnInit {

  constructor(private router: Router,
    private pacienteService: PacienteService) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigateByUrl('/tabs/perfil')
  }

}
