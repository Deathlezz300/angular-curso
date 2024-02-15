import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: ``
})
export class HeroCardComponent implements OnInit {

  @Input()
  public heroe:Hero={} as Hero

  ngOnInit(): void {
    if(!this.heroe) throw Error('Hero property is required')
  }



}
