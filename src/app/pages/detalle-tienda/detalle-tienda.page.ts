import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestProvider} from '../../providers/rest/RestProvider';
import {ServiceResponse} from '../../providers/data/tienda';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detalle-tienda',
  templateUrl: './detalle-tienda.page.html',
  styleUrls: ['./detalle-tienda.page.scss'],
  providers: [RestProvider, HttpClient ]
})
export class DetalleTiendaPage implements OnInit {
  title: string;
  id: string;
  urlback: string;
  serviceResponse: ServiceResponse;

  constructor(private route: ActivatedRoute,
              private router: Router, public  restProvider: RestProvider, public  httpClient: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.urlback = 'menu/' + this.route.snapshot.paramMap.get('urlback');

    this.restProvider.getTiendaDetail('WUU').subscribe((serviceResponse: ServiceResponse) => {

      this.serviceResponse = serviceResponse;

    });

  }

  ngOnInit() {
  //   console.table(this.param);
  //   this.modelId = this.navParams.data.paramID;
  //   this.modalTitle = this.navParams.data.paramTitle;
  }

}

/*

 const modal = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

 */
