import { Component, OnInit } from '@angular/core';
import {Item} from '../../providers/data/items';
import {ItemsService} from '../../providers/local/items.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-recreacion',
  templateUrl: './recreacion.page.html',
  styleUrls: ['./recreacion.page.scss'],
  providers: [ItemsService]
})
export class RecreacionPage implements OnInit {
  private results: Item[];

  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getRecreacionDataItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }
  ngOnInit() {
  }

}
