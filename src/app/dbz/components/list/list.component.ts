import { CommonModule }  from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./list.component.html',
  styleUrl: './list.component.css',
})
export class ListDBZComponent {

  @Output()
  public onDeleteCharacter:EventEmitter<string> = new EventEmitter();

  @Input('characters')
  public characterList:Character[]=[{
    id:crypto.randomUUID(),
    name:'Trunks',
    power:10
  }];

  deleteCharacter(id:string){

    this.onDeleteCharacter.emit(id)

  }

 }
