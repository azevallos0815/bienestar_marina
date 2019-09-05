import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pages = [
    {
      title: 'Colegios',
        url: '/home/colegios',
      icon: 'home'
    },
    {
      title: 'Asistenciales',
      children: [
        {
          title: 'Apoyo',
          url: '/home/apoyo',
          icon: 'logo-ionic'
        },
        {
          title: 'Funerario',
          url: '/home/funerario',
          icon: 'logo-google'
        },
        {
          title: 'Guarderia',
          url: '/home/guarderia',
          icon: 'logo-google'
        },
        {
          title: 'Adulto Mayor',
          url: '/home/mayor',
          icon: 'logo-google'
        },
        {
          title: 'Religioso',
          url: '/home/religioso',
          icon: 'logo-google'
        },
        {
          title: 'Social',
          url: '/home/social',
          icon: 'logo-google'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
