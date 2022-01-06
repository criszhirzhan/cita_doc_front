import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { Mensaje } from 'src/app/models/Mensaje';
import { Observable } from 'rxjs';
import { Boton } from 'src/app/models/Boton';
import { ConstantPool } from '@angular/compiler';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
//import {  }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  mensaje: Mensaje = new Mensaje();
  m: Mensaje = new Mensaje();
  boton: Boton = new Boton();
  currentUser = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
  newMsg = ''
  mensajesList: Observable<any[]>;
  botonesList: Observable<any[]>;
  mensajes: Mensaje[] = []
  botones: Boton[] = [];
  //  mensajesList: Observable<Mensaje[]>;
  @ViewChild(IonContent) content: IonContent

  constructor(public chatservice: ChatService,
    private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    console.log('Lista de mensajes')
    console.log(this.mensajes)
    this.mensajes = []
    this.botones = []
  }


  sendMessage() {
    this.mensaje.sender = this.tokenService.getUserId().toString()
    this.mensaje.message = this.newMsg
    this.mensaje.texto = this.newMsg
    this.mensaje.user = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
    this.mensajes.push(this.mensaje)
    this.currentUser = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
    this.chat(this.mensaje, true);
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    this.newMsg = ''
    this.mensaje = new Mensaje()
    console.log('Lista de mensajes')
    console.log(this.mensajes)
  }

  chat(mensaje: Mensaje, estado: Boolean) {

    if (estado) {
      return this.chatservice.postMessage(mensaje).subscribe(data => {
        //console.log('data: ', data.text);
        this.mensajesList = data;
        ///console.log(this.mensajesList)
        this.mensajesList.forEach(mensaje => {
          //Aquí insertas el código de comparación que necesites
          //console.log(mensaje)
          this.m.user = 'Dory'
          this.m.message = mensaje['text']
          this.m.sender = mensaje['recipient_id']

          if (mensaje['buttons'] != undefined) {
            console.log('Ingreasando opciones')
            this.botonesList = mensaje['buttons']
            this.botonesList.forEach(boton => {
              this.boton.title = boton['title']
              this.boton.payload = boton['payload']

              //GUARDAR LOS VALORES EN EL VECTOR
              this.botones.push(this.boton)
              console.log(this.botones)
              this.boton = new Boton()
            });
            this.botonesList = new Observable
          } else {
            console.log('Sin opciones');
          }

          if (this.botones.length > 0) {
            this.m.buttons = this.botones
            this.botones = []
          }
          this.mensajes.push(this.m)
          setTimeout(() => {
            this.content.scrollToBottom(200);
          });

          this.m = new Mensaje();
          console.log('Lista de mensajes')
          console.log(this.mensajes)
          console.log('Mensaje creado')
          console.log(this.m)
        });
        this.mensajesList = new Observable
      });
    }else{
      return this.chatservice.postMessage(mensaje).subscribe(data=>{});
    }
  }

  sendRespuesta(boton: Boton) {
    console.log('Boton Recuperado')
    console.log(boton)
    this.mensaje.user = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
    this.mensaje.texto = boton.title
    this.mensaje.sender = this.tokenService.getUserId().toString()
    this.mensaje.message = boton.payload
    this.chat(this.mensaje, true)
    this.mensajes.push(this.mensaje)
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    this.mensaje = new Mensaje()
  }

  volver() {
    this.mensaje.sender = this.tokenService.getUserId().toString()
    this.mensaje.message = 'Adios'
    this.mensaje.texto = 'Adios'
    this.mensaje.user = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
    this.currentUser = this.tokenService.getNombre() + ' ' + this.tokenService.getApellido()
    this.chat(this.mensaje, false);

    this.mensajes = []
    this.botones = []
    this.router.navigateByUrl('/tabs/citas')
  }
}