import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styles: ``
})
export class ListpageComponent implements OnInit {

  public heroes:Hero[]=[]

  constructor(
    private heroesService:HeroeService
  ){}


  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heores=>{
      this.heroes=heores;
    })
  }



}
