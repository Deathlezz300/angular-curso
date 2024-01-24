import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'table-country',
  templateUrl: './table-country.component.html',
  styles: [
    `
    img{
      width:25px
    }
    `
  ]
})
export class TableCountryComponent {

  @Input('countries')
  public countries:Country[]=[];

}
