import { Component, OnInit } from '@angular/core';
import {Item} from '../../providers/data/items';
import {ItemsService} from '../../providers/local/items.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-asesoria',
  templateUrl: './asesoria.page.html',
  styleUrls: ['./asesoria.page.scss'],
  providers: [ItemsService]
})
export class AsesoriaPage implements OnInit {

  private results: Item[];


  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getAsesoriaDataItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }
  ngOnInit() {
  }

}
