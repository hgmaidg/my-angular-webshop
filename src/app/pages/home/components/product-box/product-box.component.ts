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
  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
