import { Component } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styles: ``
})
export class SearchpageComponent {

  constructor(
    private heroeSerivce:HeroeService
  ){}

  public searchInput=new FormControl('');
  public heroes:Hero[]=[];
  public selectedHeroe?:Hero;


  searchHeroe(){
    const value:string=this.searchInput.value || '';

    this.heroeSerivce.getSuggestions(value)
    .subscribe(res=>{
      this.heroes=res;
    })

  }

  onSelectedOption(evento:MatAutocompleteSelectedEvent){
    if(!evento.option.value){

      this.selectedHeroe=undefined
      return ;
    }

    const hero:Hero=evento.option.value;
    this.searchInput.setValue(hero.superhero)

  }

}
