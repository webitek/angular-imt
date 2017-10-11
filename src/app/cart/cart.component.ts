import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderedProducts: string[] = [];

  constructor() { }

    getOrderedProducts(){
      return this.orderedProducts;
    }

    addProduct(product){
        this.orderedProducts.push(product)
    }

    productsQuantity(){
      if(this.orderedProducts){
          return this.orderedProducts.length
      }
    }

  ngOnInit() {
  }

}
