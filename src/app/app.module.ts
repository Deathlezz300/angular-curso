import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CascadeSelectModule} from 'primeng/cascadeselect'
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

//Configuracion del locale de la app
import localeESCO from '@angular/common/locales/es-CO'
import {registerLocaleData} from '@angular/common'

//se usa esta funcion para cada idomoa al instalar
registerLocaleData(localeESCO)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    SharedModule,

  ],
  //se define para que use por defecto en toda la app
  providers: [{
    provide:LOCALE_ID,useValue:'es-CO'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
