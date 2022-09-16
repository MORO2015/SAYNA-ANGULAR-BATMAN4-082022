import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  title!: string;
  price!: number;
  image!: string;
  constructor() {}

  ngOnInit(): void {
    this.title = 'Gobelet';
    this.price = 35;
  }
}
