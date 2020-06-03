import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { basket, products } from './app/products';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basket = [];
  constructor() { }

  addToBasket(product) {
    this.basket.push(product);
  }
  
  removeToBasket(product){
    this.basket.splice(this.basket.indexOf(product), 1)
  }

  getItems() {
    return this.basket;
  }
}