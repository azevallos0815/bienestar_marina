import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/colegios',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'colegios',
        loadChildren: '../colegios/colegios.module#ColegiosPageModule'
      },
      {
        path: 'apoyo',
        loadChildren: '../submenu/apoyo/apoyo.module#ApoyoPageModule'
      },
      {
        path: 'funerario',
        loadChildren: '../submenu/funerario/funerario.module#FunerarioPageModule'
      },
      {
        path: 'guarderia',
        loadChildren: '../submenu/guarderia/guarderia.module#GuarderiaPageModule'
      },
      {
        path: 'mayor',
        loadChildren: '../submenu/mayor/mayor.module#MayorPageModule'
      },
      {
        path: 'religioso',
        loadChildren: '../submenu/religioso/religioso.module#ReligiosoPageModule'
      },
      {
        path: 'social',
        loadChildren: '../submenu/social/social.module#SocialPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
