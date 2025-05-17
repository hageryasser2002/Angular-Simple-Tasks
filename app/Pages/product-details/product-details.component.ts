import { response } from 'express';
import { Subscription } from 'rxjs';
import { DynamicProductService } from './../../Services/dynamic-product.service';
import { StaticProductService } from './../../Services/static-product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId:any;
  product:any;

  constructor(private activatedRoute:ActivatedRoute,
          //  private ProductService:StaticProductService
              private ProductService:DynamicProductService 
    ){
   }

  ngOnInit(): void {
    // console.log( this.activatedRoute.snapshot.params['id']);
    // console.log( this.activatedRoute.snapshot.paramMap.get('id'));
    this.productId=this.activatedRoute.snapshot.params['id'];
    this.ProductService.getProductById(this.productId).subscribe({
      next:(response)=>{
            this.product=response;
      },
    });

  }

}
