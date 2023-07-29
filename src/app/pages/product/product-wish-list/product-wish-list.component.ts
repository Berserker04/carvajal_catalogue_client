import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '@services/wishlist.service';

@Component({
  selector: 'app-product-wish-list',
  templateUrl: './product-wish-list.component.html',
  styleUrls: ['./product-wish-list.component.scss'],
})
export class ProductWishListComponent {
  productsActiveList: any[] = [];
  productsRemoveLastList: any[] = [];
  productsRemoveList: any[] = [];

  loading = false;

  constructor(
    private router: Router,
    private productService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;

    this.productService.getMyProductAll().subscribe({
      next: ({ data }: any) => {
        const {
          productsActiveList,
          productsRemoveLastList,
          productsRemoveList,
        } = data;
        this.productsActiveList = productsActiveList;
        this.productsRemoveLastList = productsRemoveLastList;
        this.productsRemoveList = productsRemoveList;
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
