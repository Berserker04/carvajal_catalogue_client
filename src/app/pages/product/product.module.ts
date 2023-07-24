import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductWishListComponent } from './product-wish-list/product-wish-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { TableRowComponent } from 'src/app/components/table/components/table-row/table-row.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductWishListComponent,
    ProductListComponent,
    CardComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
