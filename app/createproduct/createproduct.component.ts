import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
  productData:FormGroup

  constructor(private productService:ProductsService){
    this.productData=new FormGroup({
      'title':new FormControl(''),
      'image':new FormControl('')
    })
  }
    createProduct(){
      console.log(this.productData.value)
      this.productService.createProduct(this.productData.value)
    }
}
