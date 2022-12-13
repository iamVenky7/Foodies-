import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // cartQuantity = 0;

  constructor(CartService: CartService) {}

  ngOnInit(): void {}
}
