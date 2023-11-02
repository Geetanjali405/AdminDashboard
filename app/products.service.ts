import { Injectable } from '@angular/core';

interface Product {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [];

  localStorageKey: string = "product_data";

  constructor() {
     this.loadUsersFromLocalStorage(); 
    }

  private loadUsersFromLocalStorage() {
     let productData = localStorage.getItem(this.localStorageKey); 
     if (productData) { this.products = JSON.parse(productData); }
      else { this.products = []; } }

private saveUsersToLocalStorage() { localStorage.setItem(this.localStorageKey, JSON.stringify(this.products)); }

createProduct(product:Product){
   product.id=this.products.length+1 ;
  this.products.push(product); this.saveUsersToLocalStorage();
  console.log(this.products);
  alert("Product updated!");

}

getUsers(): Product[] { return this.products; }
}
