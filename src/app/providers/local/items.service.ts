import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {Item, ItemData} from '../data/items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService extends ItemData {

  private educacionData: Item[] = [
    {
      id: 1,
      title: 'Instituciones Educativas',
      image: '/assets/logos/educativas.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 2,
      title: 'Adminsión',
      image: '/assets/logos/admision.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 3,
      title: 'Convenios',
      image: '/assets/logos/convenios.jpg',
      url: '/menu/colegios/',
    },
  ];
  private asistencialesData: Item[] = [
    {
      id: 2690,
      title: 'Social',
      image: '/assets/logos/social.jpg',
      url: '/menu/detalle-tienda/',
    },
    {
      id: 2,
      title: 'Funerario',
      image: '/assets/logos/funerario.jpg',
      url: '/menu/detalle-tienda/',
    },
    {
      id: 3,
      title: 'Religioso',
      image: '/assets/logos/religioso.jpg',
      url: '/menu/detalle-tienda/',
    },
    {
      id: 4,
      title: 'Guardería',
      image: '/assets/logos/guarderia.jpg',
      url: '/menu/detalle-tienda/',
    },
    {
      id: 5,
      title: 'Adulto Mayor',
      image: '/assets/logos/adulto.jpg',
      url: '/menu/detalle-tienda/',
    },
    {
      id: 6,
      title: 'Oficina de Apoyo',
      image: '/assets/logos/apoyo.jpg',
      url: '/menu/detalle-tienda/',
    },
  ];
  private creditoData: Item[] = [
    {
      id: 1,
      title: 'Bazar Naval',
      image: '/assets/logos/bazar.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 2,
      title: 'Crédito Efectivo',
      image: '/assets/logos/efectivo.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 3,
      title: 'Crédito Consumo',
      image: '/assets/logos/consumo.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 4,
      title: 'Concesionarios',
      image: '/assets/logos/concesionario.jpg',
      url: '/menu/colegios/',
    },
  ];
  private recreacionData: Item[] = [
    {
      id: 1,
      title: 'Centros de Esparcimiento',
      image: '/assets/logos/esparcimiento.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 1,
      title: 'Requisitos para los CE.',
      image: '/assets/logos/req_ce.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 1,
      title: 'Requisitos para acampar',
      image: '/assets/logos/acampar.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 1,
      title: 'Alquiler Cancha de Fulbito',
      image: '/assets/logos/fulbito.jpg',
      url: '/menu/colegios/',
    },
  ];
  private viviendaData: Item[] = [
    {
      id: 1,
      title: 'Servicio de Vivienda',
      image: '/assets/logos/servicio_vivienda.jpg',
      url: '/menu/colegios/',
    },
    {
      id: 1,
      title: 'Villas Navales',
      image: '/assets/logos/villas.jpg',
      url: '/menu/colegios/',
    },
  ];
  private asesoriaData: Item[] = [
    {
      id: 1,
      title: 'Bazar Naval',
      image: '/assets/logos/educativas.jpg',
      url: '/menu/colegios/',
    },
  ];

  constructor() {
    super();
  }

  getEducacionItems(): Observable<Item[]> {
    return observableOf(this.educacionData);
  }

  getAsistencialesDataItems(): Observable<Item[]> {
    return observableOf(this.asistencialesData);
  }

  getCreditoDataItems(): Observable<Item[]> {
    return observableOf(this.creditoData);
  }

  getRecreacionDataItems(): Observable<Item[]> {
    return observableOf(this.recreacionData);
  }

  getViviendaDataItems(): Observable<Item[]> {
    return observableOf(this.viviendaData);
  }

  getAsesoriaDataItems(): Observable<Item[]> {
    return observableOf(this.asesoriaData);
  }

}
