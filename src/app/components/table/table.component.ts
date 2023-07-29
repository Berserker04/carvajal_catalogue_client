import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { WishlistService } from '@services/wishlist.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() productList: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  delFromMyList(id: number): void {
    this.wishlistService.delFromMyList(id).subscribe({
      next: ({ data }: any) => {
        this.productList = [...this.productList.filter(p => p.id !== id)]
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {},
    });
  }
}
