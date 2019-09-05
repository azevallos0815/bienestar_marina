import { Observable } from 'rxjs';

export interface Colegio {
  id: number;
  title: string;
  image: string;
  detail: string;
  address: string;
  telefono: string;
  web: string;
}


export abstract class ColegioData {
  abstract getListColegios(): Observable<Colegio[]>;
  abstract getDetailColegio(id: number): Observable<Colegio>;
}
