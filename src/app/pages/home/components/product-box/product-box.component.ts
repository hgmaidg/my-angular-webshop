import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../../../../models/product.module";

@Component({
  selector: "app-product-box",
  templateUrl: "product-box.component.html",
  styles: `mat-card .margin-div {
    margin: 1rem
  }`,
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode: boolean = false;
  product: Product | undefined = {
    id: 11,
    title: "Sneakers",
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
    price: 150,
  };

  @Output() addToCart = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
