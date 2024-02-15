import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroepageComponent } from './pages/heroepage/heroepage.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListpageComponent } from './pages/listpage/listpage.component';
import { NewpageComponent } from './pages/newpage/newpage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { MaterialModule } from '../material/material.module';
import { HeroeService } from './services/heroe.service';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImageHeroePipe } from './pipes/image-heroe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { AuthService } from '../auth/services/auth.service';


@NgModule({
  declarations: [
    HeroepageComponent,
    LayoutPageComponent,
    ListpageComponent,
    NewpageComponent,
    SearchpageComponent,
    HeroCardComponent,
    ImageHeroePipe,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    HeroeService,
    ImageHeroePipe,
  ],
})
export class HeroesModule { }
