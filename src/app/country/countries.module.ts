import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SelectPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
