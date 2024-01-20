import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string[]=['Spiderman','IronMan','Hulk']
  public removedHeroes:string[]=[];


  removeLastHero(){
    const removedHero=this.heroesNames.pop() as string;
    this.removedHeroes.push(removedHero);
    //this.removedHeroes=[...this.removedHeroes,removedHero];
  }



}
