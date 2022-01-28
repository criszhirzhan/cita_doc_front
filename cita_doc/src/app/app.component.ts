import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

// @NgModule({
//   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
// })
export class AppComponent implements OnInit, OnDestroy {
  closed$ = new Subject<any>();
  showTabs = true; // <-- show tabs by default

  constructor(private _router: Router) {}

  ngOnDestroy(): void {
    this.closed$.next(); // <-- close subscription when component is destroyed
  }

  ngOnInit(): void {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {
      if (event['url'] === '/tabs/perfil') {
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'flex'
      }
      if(event['url'] === '/tabs/agendar'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'flex'
      }
      if(event['url'] === '/tabs/citas'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'flex'
      }
      if(event['url'] === '/tabs/doctores'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'flex'
      }

      //Desactivar tabs
      if(event['url'].indexOf('/tabs/perfil/det-cirugia') !== -1){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'].indexOf('/tabs/perfil/det-patologia') !== -1){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'].indexOf('/tabs/doctores/det-medico') !== -1){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'].indexOf('/tabs/citas/det-cita') !== -1){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }



      if(event['url'] === '/tabs/perfil/cirugia'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'] === '/tabs/perfil/patologia'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'] === '/tabs/perfil/det-dpersonales'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'] === '/tabs/perfil/det-dpersonales/direccion'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }
      if(event['url'] === '/tabs/agendar/chat'){
        const tabBar = document.getElementById('myTabBar'); tabBar.style.display = 'none'
      }

    });
  }
}
