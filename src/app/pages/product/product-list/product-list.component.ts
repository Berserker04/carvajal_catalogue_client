import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '@services/product.service';
import { WishlistService } from '@services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: any[] = [];

  loading = false;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;

    this.productService.getProductAll().subscribe({
      next: ({ data }: any) => {
        this.productList = [...data];
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  
}
