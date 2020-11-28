import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'pm-product-shell-detail',
    templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct | null;
    sub: Subscription;

/**
  * ? service notification(implicit) method
  * ?which only works for value in bond with a component template
get product(): IProduct | null {
  return this.productService.currentProduct;
}
*/

    constructor(private productService: ProductService) { }

    ngOnInit() {
      this.sub = this.productService.selectedProductChanges$.subscribe(
        selectedProduct => this.product = selectedProduct
      );
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
