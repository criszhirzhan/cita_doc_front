import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';

const TOKEN_KEY='AuthToken';
const USER_ID='userId';
const EMAIL = 'email';
const NOMBRE ='nombre';
const APELLIDO ='apellido';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public logOut(): void{
    window.sessionStorage.clear();
  }

  public setToken(token: string): void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserId(userId: string): void{
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, userId);
  }

  // public getUserId(): string{
  //   return window.sessionStorage.getItem(USER_ID);
  // }

  public getUserId(): number{
    return this.getDecodedAccessToken(this.getToken()).userId;
  }

  public setEmail(email: string): void{
    window.sessionStorage.removeItem(EMAIL);
    window.sessionStorage.setItem(EMAIL, email);
  }

  public getEmail(): string{
    return this.getDecodedAccessToken(this.getToken()).email;
  }

  public setNombre(nombre: string): void{
    window.sessionStorage.removeItem(NOMBRE);
    window.sessionStorage.setItem(NOMBRE, nombre);
  }

  public getNombre(): string{
    return this.getDecodedAccessToken(this.getToken()).nombre;
  }

  public setApellido(apellido: string): void{
    window.sessionStorage.removeItem(APELLIDO);
    window.sessionStorage.setItem(APELLIDO, apellido);
  }

  public getApellido(): string{
    return this.getDecodedAccessToken(this.getToken()).apellido;
  }


  public getDecodedAccessToken(token: string): any{
    try{
      return jwt_decode(token);
    }catch(Error){
      return null;
    }
  }

}