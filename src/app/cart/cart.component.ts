import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items;
    checkoutForm;
  constructor(private cartService: CartService, private formBuider: FormBuilder,) { 
    this.checkoutForm = this.formBuider.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  oSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert(' '+name);

  console.warn('Seu pedido foi enviado!', costomerData);
  }

}