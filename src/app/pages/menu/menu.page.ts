import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Educación',
      url: '/menu/educacion',
      icon: 'menu'
    },
    {
      title: 'Asistenciales',
      url: '/menu/asistenciales',
      icon: 'menu'
    },
    {
      title: 'Créditos',
      url: '/menu/credito',
      icon: 'menu'
    },
    {
      title: 'Recreación',
      url: '/menu/recreacion',
      icon: 'menu'
    },
    {
      title: 'Vivienda',
      url: '/menu/vivienda',
      icon: 'menu'
    },
    {
      title: 'Asesoría Legal',
      url: '/menu/asesoria',
      icon: 'menu'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
