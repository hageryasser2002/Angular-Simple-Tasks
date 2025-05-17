import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
 productList:any;
  constructor() { 
   this.productList= [
    {
      Id:1,
      Name:"Book",
      Price:50,
      Quantity:10
    },
    {
      Id:2,
      Name:"NoteBook",
      Price:20,
      Quantity:15
    },
    {
      Id:3,
      Name:"Pencil",
      Price:10,
      Quantity:70
    },
    {
      Id:4,
      Name:"Oil",
      Price:40,
      Quantity:70
    },
    {
      Id:5,
      Name:"Orange",
      Price:25,
      Quantity:50
    }
   ];
  }

  getAllProduct(){
   return this.productList;
  }

  addNewProduct(product:any){
   this.productList.push(product);
  }

  deleteProduct(productId:any){
    this.productList = this.productList.filter(
          (product:any)=>product.Id!==productId
        );
  }

  getProductById(productId:any){
    return this.productList.find((product:any)=>product.Id== productId);
  }
}
