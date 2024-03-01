import { Component } from '@angular/core';
import { MenuItem } from '../../interface/shared.interface';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu:MenuItem[]=[
    {
      title:'Básicos',
      route:'/reactive/basic'
    },
    {
      title:'Dinamico',
      route:'/reactive/dynamic'
    },
    {
      title:'Switches',
      route:'/reactive/switches'
    }

  ]

  public AuthMenu:MenuItem[]=[
    {
      title:'Register',
      route:'/auth/register'
    }
  ]

}
