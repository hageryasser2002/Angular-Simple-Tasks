import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DynamicProductService {
  
  baseURl:string="http://localhost:3005/products";

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseURl);
  }

  addNewProduct(product:any):Observable<IProduct>{
    return this.http.post<IProduct>(this.baseURl,product);
  }


  editProduct(productId:any, product:any){
    return this.http.put(`${this.baseURl}/${productId}`, product);
  }

  deleteProduct(productId:any){
    return this.http.delete(`${this.baseURl}/${productId}`);
  }

  getProductById(productId:string):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseURl}/${productId}`);
  }
 


}
