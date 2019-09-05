import { Observable } from 'rxjs';

export interface Item {
  id: number;
  title: string;
  image: string;
  url: string;
}


export abstract class ItemData {
  abstract getEducacionItems(): Observable<Item[]>;
  abstract getAsistencialesDataItems(): Observable<Item[]>;
  abstract getCreditoDataItems(): Observable<Item[]>;
  abstract getRecreacionDataItems(): Observable<Item[]>;
  abstract getViviendaDataItems(): Observable<Item[]>;
  abstract getAsesoriaDataItems(): Observable<Item[]>;
}
