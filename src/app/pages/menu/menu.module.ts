import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/colegios',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'colegios',
        loadChildren: '../colegios/colegios.module#ColegiosPageModule'
      },
      {
        path: 'educacion',
        loadChildren: '../educacion/educacion.module#EducacionPageModule'
      },
      {
        path: 'asistenciales',
        loadChildren: '../asistenciales/asistenciales.module#AsistencialesPageModule'
      },
      {
        path: 'credito',
        loadChildren: '../credito/credito.module#CreditoPageModule'
      },
      {
        path: 'recreacion',
        loadChildren: '../recreacion/recreacion.module#RecreacionPageModule'
      },
      {
        path: 'vivienda',
        loadChildren: '../vivienda/vivienda.module#ViviendaPageModule'
      },
      {
        path: 'asesoria',
        loadChildren: '../asesoria/asesoria.module#AsesoriaPageModule'
      },
      {
        path: 'detalle-tienda/:id/:urlback',
        loadChildren: '../detalle-tienda/detalle-tienda.module#DetalleTiendaPageModule'
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
  declarations: [MenuPage]
})
export class MenuPageModule {}
