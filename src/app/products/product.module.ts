import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';

import { ProductService } from './product.service';
import { ProductEditGuard } from './edit/product-edit-guard.service';
import { ProductParameterService } from './product-parameter.service';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';

const viewType: boolean = false;
const view = viewFunction(viewType);
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: view },
      { path: ':id', component: ProductDetailComponent },
      {
        path: ':id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent,
      },
    ]),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductShellComponent,
    ProductShellDetailComponent,
    ProductShellListComponent,
  ],
  providers: [ProductService, ProductEditGuard, ProductParameterService],
})
export class ProductModule {}

// This function is to allow the user to decide the type of product view they want.
function viewFunction(viewOption: boolean) {
  if (viewOption === true) {
    return ProductListComponent;
  } else {
    return ProductShellComponent;
  }
}
