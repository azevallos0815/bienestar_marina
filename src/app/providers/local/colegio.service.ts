import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Colegio, ColegioData } from '../data/colegios';

@Injectable({
  providedIn: 'root',
})
export class ColegiosService extends ColegioData {

  private listData: Colegio[] = [
    {
      id: 1,
      title: 'Liceo Naval “Almirante Guise”',
      image: '/assets/colegios/colegio_1.jpg',
      detail: 'Liceo para los hijos del Personal Superior. Atiende en los niveles: Pre-kinder, Kinder, Inicial, Primaria, Secundaria, Programa de Bachillerato y Programa de Educación a Distancia en sus modalidades de: Básica Regular y Básica Alternativa. Ubicado en el distrito de San Borja.',
      address: 'Calle Monti 350 (Alt.Cdra.28 Av. Aviación) / San Borja - Lima',
      telefono: '475 8055 - 225 3154',
      web: 'http://dirbiemar.pe/View/educacion/LiceoGuise/index.html',
    },
    {
      id: 2,
      title: 'Liceo Naval “Capitán de Corbeta Manuel Clavero Muga”',
      image: '/assets/colegios/colegio_2.jpg',
      detail: 'Liceo para los hijos del Personal Subalterno y Civil de Marina, atiende en los niveles: Inicial, Primaria y Secundaria en un solo turno. Ubicado en el distrito de Ventanilla-Callao.',
      address: 'Av. Mercurio S/N Urb. Naval / Ventanilla - Callao',
      telefono: '553 7068 / 553 5951',
      web: 'http://lncc.edu.pe/',
    },
    {
      id: 3,
      title: 'Liceo Naval “Contralmirante Montero”',
      image: '/assets/colegios/colegio_3.jpg',
      detail: 'Para los hijos del Personal Subalterno y Civil de Marina, atiende en los niveles: Inicial (desde los TRES (3) años), Primaria y Secundaria en un solo turno. Ubicado en el distrito de San Miguel.',
      address: ' Av. Venezuela Cdra. 34 / San Miguel - Lima',
      telefono: '514 7812',
      web: 'http://www.liceomontero.net/',
    },
    {
      id: 4,
      title: 'Liceo Naval “Capitán de Navío Germán Astete”',
      image: '/assets/colegios/colegio_4.jpg',
      detail: 'Para los hijos del Personal Subalterno y Civil de Marina. Ubicado en el distrito de La Perla-Callao.',
      address: 'Calle Gritos de Huaura 310 / La Perla Callao',
      telefono: '420 6455',
      web: 'http://www.lnga.edu.pe/',
    },
    {
      id: 5,
      title: 'Liceo Naval “Capitán de Navío Juan Fanning García”',
      image: '/assets/colegios/colegio_5.jpg',
      detail: 'Para los hijos del Personal Subalterno y Civil de Marina, atiende en un solo turno. Ubicado en el distrito de Chorrillos.',
      address: 'Mz G 10 Lote 01 Las Delicias de Villa / Chorrillos - Lima',
      telefono: '475 8055 / 225 3154',
      web: 'https://www.facebook.com/Liceo-Naval-Capitan-de-Navio-Juan-Fanning-Garcia-Chorrillos-124422474307846/',
    },
    {
      id: 6,
      title: 'Liceo Naval “Capitán de Navío Francisco Carrasco ”',
      image: '/assets/colegios/colegio_6.jpg',
      detail: 'Para los hijos del Personal Superior, Subalterno y Civil de la Marina. Atiende en los niveles: Inicial, Primaria y Secundaria. Ubicado en el distrito de Punchana-Loreto.',
      address: 'Av. La Marina 1880 / Punchana – Iquitos – Loreto',
      telefono: '',
      web: 'https://www.facebook.com/liceonavalfc/',
    },
    {
      id: 7,
      title: 'Liceo Naval “Capitán de Navío Juan Noel Lastra”',
      image: '/assets/colegios/colegio_7.jpg',
      detail: 'Para los hijos del Personal Superior Subalterno y Civil. Atiende los en los niveles: Inicial, Primaria y Secundaria. Ubicado en la Ciudad de Paita-Piura.',
      address: 'Villa Naval S/N. / Paita – Piura',
      telefono: '',
      web: 'Villa Naval S/N. / Paita – Piura',
    },
    {
      id: 8,
      title: 'Institución Educativa Inicial “Niño Jesús de Praga”',
      image: '/assets/colegios/colegio_8.jpg',
      detail: 'Proporciona atención y educación integral a los hijos del Personal Superior, desde los 3 meses hasta los 3 años de edad. Atiende de 07:00 a 17:30 horas. Ubicado en el distrito de San Borja.',
      address: 'Calle Andrea del Sarto Cuadra 2 / San Borja - Lima',
      telefono: '224 1996',
      web: '',
    },
    {
      id: 9,
      title: 'Institución Educativa Inicial - “Stella Maris”',
      image: '/assets/colegios/colegio_9.jpg',
      detail: 'Proporciona atención y educación a los hijos del Personal Subalterno, desde los 3 meses hasta los 3 años. Atiende de 07:00 a 17:30 horas. Ubicado en el distrito de La Perla-Callao.',
      address: 'Calle Grito de Huaura #308 / La Perla - Callao',
      telefono: '420 6833 / #211441',
      web: 'http://www.ieinavalstellamaris.edu.pe/',
    },
    {
      id: 10,
      title: 'Institución Educativa Inicial - “Divino Niño Jesús”',
      image: '/assets/colegios/colegio_10.jpg',
      detail: 'Proporciona atención y educación a los hijos del Personal Subalterno, desde los 3 meses hasta los 3 años. Atiende de 07:00 a 17:30 horas. Ubicado en el distrito de San Miguel.',
      address: 'Av. Venezuela Cuadra 34 / San Miguel - Lima',
      telefono: '944 662 118',
      web: 'https://www.facebook.com/cunajardinDNJ/',
    },
    {
      id: 11,
      title: 'Centro de Educación Básica Especial “Santa Teresa de Couderc”',
      image: '/assets/colegios/colegio_11.jpg',
      detail: 'Para los hijos del Personal Superior, Subalterno y Civil de Marina en DOS (2) modalidades: Escolarizada (Inicial y Primaria hasta los 20 años de edad cronológica, con discapacidad severa y multidiscapacidad y los programas no escolarizados: estimulación temprana para niños de 3 meses a 3 años de alto riesgo (SITE), y el programa de evaluación y terapias psicopedagógicas ambulatorias y de servicio a la comunidad educativa naval (PROPSI).',
      address: 'Av. Venezuela S/N Cuadra 36 (Centro Medico Naval) Bellavista - Callao',
      telefono: '207 1600',
      web: 'http://www.ceesantateresa.com/Stc_bienvenida.html',
    },
  ];

  constructor() {
    super();
  }

  getListColegios(): Observable<Colegio[]> {
    return observableOf(this.listData);
  }

  getDetailColegio(id: number): Observable<Colegio> {
    return observableOf(this.listData[id]);
  }

}
