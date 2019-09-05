import { Component, OnInit } from '@angular/core';
import {ColegiosService} from '../../providers/local/colegio.service';
import {Colegio} from '../../providers/data/colegios';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.page.html',
  styleUrls: ['./colegios.page.scss'],
  providers: [ColegiosService]
})
export class ColegiosPage implements OnInit {

  results: Colegio[];

  constructor( private colegiosService: ColegiosService) {
    forkJoin(this.colegiosService.getListColegios())
        .subscribe(([response]: [Colegio[]]) => {
          this.results = response;
        });
  }

  ngOnInit() {
  }

  openDetail(id: number) {
    console.log(id);
  }
}
