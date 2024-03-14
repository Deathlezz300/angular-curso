import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPageComponent } from './pages/select-page/select-page.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'selector',
        component:SelectPageComponent
      },
      {
        path:'**',
        redirectTo:'selector'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
