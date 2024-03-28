import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.module";

@Component({
  selector: "app-cart",
  templateUrl: "cart.component.html",
  styles: "mat-card {margin: auto}",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        id: 1,
        name: "Angular",
        price: 37,
        quantity: 80,
      },
      {
        product: "https://via.placeholder.com/150",
        id: 1,
        name: "Angular",
        price: 37,
        quantity: 80,
      },
      {
        product: "https://via.placeholder.com/150",
        id: 1,
        name: "Angular",
        price: 37,
        quantity: 80,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor() {}
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}
