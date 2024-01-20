import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='Iron Man';
  public age:number=45;

   get CapitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name}-${this.age}`
  }

  changeHeroe(nombre:string){
    this.name=nombre;
  }

  changeAge(edad:number){
    this.age=edad
  }

  resetForm(){
    this.name='Iron Man';
    this.age=25;
  }

}
