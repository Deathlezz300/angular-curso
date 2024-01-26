import { Component, OnInit } from '@angular/core';
import { MenuItem,PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public menuItems:MenuItem[]=[];

  ngOnInit(): void {
    this.menuItems=[
      {
        label:'Pipes de Angular',
        icon:PrimeIcons.DESKTOP,
        items:[
          {
            label:'Textos y fechas',
            icon:'pi pi-align-left',
            routerLink:'/',
          },
          {
            label:'Numeros',
            icon:PrimeIcons.DOLLAR,
            routerLink:'numbers'
          },
          {
            label:'No coumnes',
            icon:PrimeIcons.GLOBE,
            routerLink:'uncommon'
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon:PrimeIcons.COG,
        items:[
          {
            label:'Otro elemento',
            icon:PrimeIcons.COG
          }
        ]
      }
    ]
  }

}
