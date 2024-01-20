import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters:Character[]=[{
        id:crypto.randomUUID(),
        name:'Krillin',
        power:300
    },
    {
        id:crypto.randomUUID(),
        name:'Goku',
        power:9500
    },
    {
        id:crypto.randomUUID(),
        name:'Vegeta',
        power:5000
    }];

    addCharacter(personaje:Character){

        //parar la aplicación para poder observar los procesos
        //debugger;

        this.characters.push({
            ...personaje,
            id:crypto.randomUUID()
        });
    }

    deleteCharacter(id:string){

        this.characters=this.characters.filter(ch=>{
            return ch.id != id
        });

    }

    
}