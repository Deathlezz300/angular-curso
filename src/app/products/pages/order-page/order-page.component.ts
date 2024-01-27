import { Component } from '@angular/core';
import { Color, hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styles: ``
})
export class OrderPageComponent {

  public isUppercase:boolean=false;

  public heroes:hero[]=[
    {
      name:'Superman',
      canFly:true,
      color:Color.blue
    },
    {
      name:'Batman',
      canFly:false,
      color:Color.black
    },
    {
      name:'Green lantern',
      canFly:true,
      color:Color.green
    },
    {
      name:'Daredevil',
      canFly:false,
      color:Color.red
    }
  ]

  public sortby!:keyof hero;

  toogleUppercase(){
    this.isUppercase=!this.isUppercase;
  }

  changeSort(sort:keyof hero){
    this.sortby=sort;
  }

}
