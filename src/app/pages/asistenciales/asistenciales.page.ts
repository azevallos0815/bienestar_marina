import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../providers/local/items.service';
import {forkJoin} from 'rxjs';
import {Item} from '../../providers/data/items';

@Component({
  selector: 'app-asistenciales',
  templateUrl: './asistenciales.page.html',
  styleUrls: ['./asistenciales.page.scss'],
  providers: [ItemsService]
})
export class AsistencialesPage implements OnInit {
  private results: Item[];


  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getAsistencialesDataItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }

  ngOnInit() {
  }

}
