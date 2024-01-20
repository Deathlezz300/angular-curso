import { Component, Input } from '@angular/core';
import { Datum } from '../../interface/gifs.interface';


@Component({
  selector: 'gifs-card-list',
  standalone:false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input('gifs')
  public gifList:Datum[]=[];

  

}
