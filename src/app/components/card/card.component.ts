import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { WishlistService } from '@services/wishlist.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: any = {};
  constructor(
    private wishlistService: WishlistService
  ) {}

  addToMyList(id: number): void {
    this.wishlistService.addToMyList(id).subscribe({
      next: ({ data }: any) => {
        this.product.isLike = true;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
      },
    });
  }

  delFromMyList(id: number): void {
    this.wishlistService.delFromMyList(id).subscribe({
      next: ({ data }: any) => {
        this.product.isLike = false;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }
}
