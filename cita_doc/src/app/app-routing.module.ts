import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./publico/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./publico/registro/registro.module').then( m => m.RegistroPageModule)
  },
  // {
  //   path: 'citas',
  //   loadChildren: () => import('./privado/citas/citas.module').then( m => m.CitasPageModule)
  // },
  // {
  //   path: 'doctores',
  //   loadChildren: () => import('./privado/doctores/doctores.module').then( m => m.DoctoresPageModule)
  // },
  // {
  //   path: 'agendar',
  //   loadChildren: () => import('./privado/agendar/agendar.module').then( m => m.AgendarPageModule)
  // },
  // {
  //   path: 'perfil',
  //   loadChildren: () => import('./privado/perfil/perfil.module').then( m => m.PerfilPageModule)
  // },
  {
    path: 'notificaciones',
    loadChildren: () => import('./privado/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
 {
   path: 'chat',
   loadChildren: () => import('./privado/chat/chat.module').then( m => m.ChatPageModule)
 },
  // {
  //   path: 'cirugia',
  //   loadChildren: () => import('./privado/cirugia/cirugia.module').then( m => m.CirugiaPageModule)
  // },
  // {
  //   path: 'patologia',
  //   loadChildren: () => import('./privado/patologia/patologia.module').then( m => m.PatologiaPageModule)
  // },
  // {
  //   path: 'det-patologia/:idPatologia',
  //   loadChildren: () => import('./privado/detalles/det-patologia/det-patologia.module').then( m => m.DetPatologiaPageModule)
  // },
  // {
  //   path: 'det-cirugia/:idCirugia',
  //   loadChildren: () => import('./privado/detalles/det-cirugia/det-cirugia.module').then( m => m.DetCirugiaPageModule)
  // },
  // {
  //   path: 'det-dpersonales',
  //   loadChildren: () => import('./privado/detalles/det-dpersonales/det-dpersonales.module').then( m => m.DetDpersonalesPageModule)
  // },
  // {
  //   path: 'direccion',
  //   loadChildren: () => import('./privado/direccion/direccion.module').then( m => m.DireccionPageModule)
  // },
  // {
  //   path: 'det-direccion/:idDireccion',
  //   loadChildren: () => import('./privado/detalles/det-direccion/det-direccion.module').then( m => m.DetDireccionPageModule)
  // },
  // {
  //   path: 'det-medico/:idMedico',
  //   loadChildren: () => import('./privado/detalles/det-medico/det-medico.module').then( m => m.DetMedicoPageModule)
  // },
  // {
  //   path: 'det-cita/:idCita',
  //   loadChildren: () => import('./privado/detalles/det-cita/det-cita.module').then( m => m.DetCitaPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
