import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


interface Product {
  id: number;
  title: string;
}

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent {
  currentProduct: Product | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {
    console.log(this.activeRoute);
    let ProductId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((params) => {
      let ProductIndex = this.ProductsService.products.findIndex(
        (u) => u.id == ProductId
      );

      this.currentProduct = this.ProductsService.products[ProductIndex];
    });
  }
}
