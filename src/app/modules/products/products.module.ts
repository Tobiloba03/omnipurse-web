import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProductsOverviewComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
