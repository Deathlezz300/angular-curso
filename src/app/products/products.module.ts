import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { CanFly } from './pipes/canFly.pipe';
import { SortBy } from './pipes/sortBy.pipe';



@NgModule({
  declarations: [
  
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
    OrderPageComponent,
    ToogleCasePipe,
    CanFly,
    SortBy
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
