import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';

const routes: Routes = [
  {
    path: 'products-overview',
    component: ProductsOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
