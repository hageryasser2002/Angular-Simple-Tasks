import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StaticProductService } from '../../Services/static-product.service';
import { IProduct } from '../../Models/IProduct';
import { DynamicProductService } from '../../Services/dynamic-product.service';
import { response } from 'express';
import { error } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  size!:string;
  category!:string;
  
  // products:any;
  products!:IProduct[];


  constructor(private productService:DynamicProductService,
              private router: Router
    // private productService:StaticProductService
  ){}

  ngOnInit(): void {
   this.productService.getAllProduct().subscribe({
    next:(response)=>{
      console.log(response);
      this.products=response;
    },
    error:(error)=>{
      console.log(error);
    }
   });
    //console.log(this.products);
  }

  deleteProduct(productId:any){
    this.productService.deleteProduct(productId).subscribe({
      next:()=>{
          this.products=this.products.filter(
                (product)=>product.id!=productId
          );
      },
    });

  //  this.products= this.productService.getAllProduct();
  }

   filterBy() {
    this.router.navigate(['/products'], {
      queryParams: { size: this.size, category: this.category },
    });
  }
}

