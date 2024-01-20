import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-dbz',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormDBZComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();


  public character:Character={} as Character 

  emitCharacter():void{

    if(this.character.name.length===0) return ;

    this.onNewCharacter.emit(this.character);

    this.character={} as Character

  }

}
