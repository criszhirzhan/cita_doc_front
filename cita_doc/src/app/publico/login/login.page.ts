import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
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
    this.authService.login(this.login).subscribe(
      data=>{
        console.log('data',data);
        console.log('dataToken',data.token);
        this.tokenService.setToken(data.token);
        
        this.router.navigateByUrl('tabs')
      },
      err=>{
        this.errMessage=err.error.message;
        this.presentToast(); 
      }
    )

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errMessage,
      duration: 2000,
      position:'middle'
    });
    toast.present();
  }

}
