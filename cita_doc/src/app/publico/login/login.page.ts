import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login : Login= new Login(); 
  errMessage=''

  constructor(private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private toastController: ToastController) { }

  ngOnInit() {
   // console.log('token id: ', this.tokenService.getUserId());
   // console.log('token nombre: ', this.tokenService.getNombre());
  }

  async onLogin(){
   // this.login = new Login(this.email, this.password);
   console.log('LOGIN')
   console.log(this.login)


  }

  async presentToast(header: string, mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: color,
      header: header
    });
    toast.present();
  }
  async ingresar(){
    this.authService.login(this.login).subscribe(
      data=>{
        console.log('data',data);
        console.log('dataToken',data.token);
        this.presentToast('Exito', 'Inicio de sesión correcto','success');
        this.tokenService.setToken(data.token);
        
        this.router.navigateByUrl('tabs')
      },
      err=>{
        this.errMessage=err.error.message;
        this.presentToast('Fallo', 'Ingrese el correo y la contraseña correctos','danger'); 
      }
    )
  }

}
