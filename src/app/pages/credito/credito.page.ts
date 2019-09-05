import { Component, OnInit } from '@angular/core';
import {Item} from '../../providers/data/items';
import {ItemsService} from '../../providers/local/items.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
  providers: [ItemsService]
})
export class CreditoPage implements OnInit {

  private results: Item[];


  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getCreditoDataItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }

  ngOnInit() {
  }

}
