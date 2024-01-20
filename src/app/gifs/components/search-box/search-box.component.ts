import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone:false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  constructor(
    public gifsService:GifsServiceService
  ){}

  //Sirve para tomar una referencia local de un elemento HTML
  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  searchTag(){
    this.gifsService.searchTag(this.tagInput.nativeElement.value)

    this.tagInput.nativeElement.value='';
  }

}
