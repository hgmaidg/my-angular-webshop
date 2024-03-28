import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-box",
  templateUrl: "product-box.component.html",
  styles: `mat-card .margin-div {
    margin: 1rem
  }`,
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode: boolean = false;
  constructor() {}
  ngOnInit(): void {}
}
