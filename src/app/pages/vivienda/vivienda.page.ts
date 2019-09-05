import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../providers/local/items.service';
import {Item} from '../../providers/data/items';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
  providers: [ItemsService]
})
export class ViviendaPage implements OnInit {

  private results: Item[];

  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getViviendaDataItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }
  ngOnInit() {
  }

}
