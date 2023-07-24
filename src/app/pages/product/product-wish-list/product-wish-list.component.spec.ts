import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWishListComponent } from './product-wish-list.component';

describe('ProductWishListComponent', () => {
  let component: ProductWishListComponent;
  let fixture: ComponentFixture<ProductWishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWishListComponent]
    });
    fixture = TestBed.createComponent(ProductWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
