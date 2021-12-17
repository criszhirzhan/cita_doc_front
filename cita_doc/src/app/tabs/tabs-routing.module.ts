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
      //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)
      loadChildren: () => import('../privado/citas/citas.module').then( m => m.CitasPageModule)
      },
      {
        path: 'doctores',
        //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)
        loadChildren: () => import('../privado/doctores/doctores.module').then( m => m.DoctoresPageModule)
      },
      {
        path: 'agendar',
        //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)
        loadChildren: () => import('../privado/agendar/agendar.module').then( m => m.AgendarPageModule)
      },
      {
        path: 'perfil',
        //loadChildren: () => import('./././publico/login/login.module').then( m => m.LoginPageModule)
        loadChildren: () => import('../privado/perfil/perfil.module').then( m => m.PerfilPageModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
