import { Component, OnInit } from '@angular/core';
import { ListDBZComponent } from '../components/list/list.component';
import { FormDBZComponent } from '../components/form/form.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    standalone:true,
    imports:[ListDBZComponent,FormDBZComponent],
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    
    constructor(
        private dbzService:DbzService
    ) {}

    get getCharacters():Character[]{
        return this.dbzService.characters;
    }

    onDeleteCharacter(id:string){
        this.dbzService.deleteCharacter(id)
    }

    onAddCharacter(character:Character){
        this.dbzService.addCharacter(character)
    }

    
}