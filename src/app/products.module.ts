import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProducDetailsComponent } from './components/produc-details/produc-details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { AuthGuard } from './gaurds/auth.guard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    ProductsComponent,
    ProducDetailsComponent,
    ProductEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: ProductsComponent },
          { path: ':id', component: ProducDetailsComponent },
          { path: ':id/edit', component: ProductEditComponent },
        ],
      },
    ]),
    CommonModule,
    HttpClientModule,
  ],
})
export class ProductsModule {}
