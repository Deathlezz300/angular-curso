import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListpageComponent } from './pages/listpage/listpage.component';
import { NewpageComponent } from './pages/newpage/newpage.component';
import { HeroepageComponent } from './pages/heroepage/heroepage.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { PrivateHeroeGuardCanMatch } from './guards/heroe.guard';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'',
        component:ListpageComponent,
        canActivate:[PrivateHeroeGuardCanMatch],
        canMatch:[PrivateHeroeGuardCanMatch]
      },
      {
        path:'new-heroe',
        component:NewpageComponent,
        canActivate:[PrivateHeroeGuardCanMatch],
        canMatch:[PrivateHeroeGuardCanMatch]
      },
      {
        path:'edit/:id',
        component:NewpageComponent,
        canActivate:[PrivateHeroeGuardCanMatch],
        canMatch:[PrivateHeroeGuardCanMatch]
      },
      {
        path:'search',
        component:SearchpageComponent,
        canActivate:[PrivateHeroeGuardCanMatch],
        canMatch:[PrivateHeroeGuardCanMatch]
      },
      {
        path:':id',
        component:HeroepageComponent,
        canActivate:[PrivateHeroeGuardCanMatch],
        canMatch:[PrivateHeroeGuardCanMatch]
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
