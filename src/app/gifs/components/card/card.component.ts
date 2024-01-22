import { Component, Input } from '@angular/core';
import { Datum } from '../../interface/gifs.interface';

@Component({
  selector: 'app-card-gif',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input('gifData')
  public GifData:Datum={} as Datum

}
