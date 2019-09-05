import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from '../data/tienda';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export  class  RestProvider {

    baseUrl = 'http://localhost:3000';

    constructor(private  httpClient: HttpClient) { }

    public login() {

    }
    getTiendaDetail(codeTienda: string, type: ServiceResponse): Observable<any> {
        return  this.httpClient.get(this.baseUrl + '/products')
            .pipe(map(response  => response['data']));

    }

// // Sending a GET request to /products
//
//     public  getProducts(){
//
//     }
//
// // Sending a POST request to /products
//
//     public  createProduct(product: Product) {
//
//     }
//
// // Sending a GET request to /products/:id
//
//     public  getProductById(productId: number) {
//
//     }
//
// // Sending a PUT request to /products/:id
//
//     public  updateProduct(product: Product){
//
//     }
//
// // Sending a DELETE request to /products/:id
//
//     public  deleteProductById(productId: number) {
//
//     }

}
