import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verNotificaciones(){
    this.router.navigateByUrl('/notificaciones')
  }

  start(){
    this.router.navigateByUrl('/tabs/agendar/chat')
  }

}
