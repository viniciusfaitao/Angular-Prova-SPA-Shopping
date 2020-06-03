import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { products, basket } from './products';
import { BasketService } from '../basket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {
  products = products;
  basket = [];
  quantidade = 0;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private basketService: BasketService) {}
  
  open(content) {
    this.basket = this.basketService.getItems();
    this.modalService.open(content);
  }

  addTobasket(product) {
    if(this.quantidade <= product.stock){
      const productExistInBasket = this.basket.find(({name}) => name === product.name);
      if (!productExistInBasket) {
        this.basket.push({...product, quantidade: this.quantidade, price: this.quantidade * product.price});
      }
    }
  }
  
  removeToBasket(product) {
    this.basketService.removeToBasket(product);
  }

  total() {
    return this.basket.reduce((total, item) => total + item.price, 0);
  }

  
}
