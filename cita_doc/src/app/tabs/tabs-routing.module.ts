import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'citas',

        children: [
          {
            path: '',
            loadChildren: () => import('../privado/citas/citas.module').then(m => m.CitasPageModule)
          },
          {
            path: 'det-cita/:idCita',
            loadChildren: () => import('../privado/detalles/det-cita/det-cita.module').then(m => m.DetCitaPageModule)
          }
        ]
      },

      {
        path: 'doctores',

        children: [
          {
            path: '',
            loadChildren: () => import('../privado/doctores/doctores.module').then(m => m.DoctoresPageModule)
          },
          {
            path: 'det-medico/:idMedico',
            loadChildren: () => import('../privado/detalles/det-medico/det-medico.module').then(m => m.DetMedicoPageModule)
          },
        ]
        //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)

      },
      {
        path: 'agendar',
        children: [
          {
            path: '',
            loadChildren: () => import('../privado/agendar/agendar.module').then(m => m.AgendarPageModule)

          },
          {
            path: 'chat',
            loadChildren: () => import('../privado/chat/chat.module').then( m => m.ChatPageModule)
          },
        ]
        //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)
      },


      {
        path: 'perfil',

        children: [
          {
            path: '',
            loadChildren: () => import('../privado/perfil/perfil.module').then(m => m.PerfilPageModule)


          },
          {
            path: 'det-dpersonales',
            children: [
              {
                path: '',
                loadChildren: () => import('../privado/detalles/det-dpersonales/det-dpersonales.module').then(m => m.DetDpersonalesPageModule)

              },
              {
                path: 'det-direccion/:idDireccion',
                loadChildren: () => import('../privado/detalles/det-direccion/det-direccion.module').then(m => m.DetDireccionPageModule)
              },
              {

                path: 'direccion',
                loadChildren: () => import('../privado/direccion/direccion.module').then(m => m.DireccionPageModule)

              }
            ]
          },
          {

            path: 'cirugia',
            loadChildren: () => import('../privado/cirugia/cirugia.module').then(m => m.CirugiaPageModule)

          },
          {
            path: 'patologia',
            loadChildren: () => import('../privado/patologia/patologia.module').then(m => m.PatologiaPageModule)
          },
          {
            path: 'det-patologia/:idPatologia',
            loadChildren: () => import('../privado/detalles/det-patologia/det-patologia.module').then(m => m.DetPatologiaPageModule)
          },
          {
            path: 'det-cirugia/:idCirugia',
            loadChildren: () => import('../privado/detalles/det-cirugia/det-cirugia.module').then(m => m.DetCirugiaPageModule)
          },
        ]
      },



      {
        path: '',
        redirectTo: '/tabs/citas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/citas',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
