import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [
    {
      name : "Phone XL",
      price : 8000,
      description : "A large phone with one of the best screens"
    },
    {
      name : "Phone Mini",
      price : 534,
      description : "A great phone with one of the best camera"
    },
    {
      name : "Phone Standard",
      price : 343,
      description : ""
    }
  ];

  share() {
    window.alert('The product has been shared!');
  };

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/