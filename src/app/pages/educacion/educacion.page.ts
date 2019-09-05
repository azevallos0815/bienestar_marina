import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../../providers/local/items.service';
import {forkJoin} from 'rxjs';
import {Item} from '../../providers/data/items';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.page.html',
  styleUrls: ['./educacion.page.scss'],
  providers: [ItemsService]
})
export class EducacionPage implements OnInit {
  private results: Item[];

  constructor( private itemsService: ItemsService) {
    forkJoin(this.itemsService.getEducacionItems())
        .subscribe(([response]: [Item[]]) => {
          this.results = response;
        });
  }

  ngOnInit() {
  }
}
