import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
interface Product{
  id: number;
  title: string
}

@Component({
  selector: 'app-prodcards',
  templateUrl: './prodcards.component.html',
  styleUrls: ['./prodcards.component.css']
})
export class ProdcardsComponent implements OnInit{
  productData: Array<any> = []
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    console.error(this.productService.products);
    this.productData=this.productService.products;
    console.log(this.productService.products);
  }
}
