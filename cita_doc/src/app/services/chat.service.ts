import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';


import { Observable, of } from 'rxjs';
import { Mensaje } from '../models/Mensaje';


import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  rasa_url='http://192.168.100.5:5005/webhooks/rest/webhook';
  //rasa_url='http://localhost:5005/webhooks/rest/';
 // rasa_url2='http://localhost:5005/version';
 // url="http://localhost:8090/medico";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  postMessage(mensaje: Mensaje): Observable<any>{
    return this.http.post<any>(this.rasa_url, mensaje)
  }

//   getMedicos(): Observable<any>{
//     return this.http.get<any>(this.url)
//   }


//   getStatus(): Observable<any>{
//     return this.http.get<any>(this.rasa_url2)
//   }


// postChat(mensaje: Mensaje): Observable<any> {
//   return this.http.post<Mensaje>(this.rasa_url, JSON.stringify(mensaje), this.httpOptions)
//     .pipe(
//       catchError(this.handleError<Mensaje>('Error occured'))
//     );
// }

// private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     console.error(error);
//     console.log(`${operation} failed: ${error.message}`);
//     return of(result as T);
//   };
// } 
}

