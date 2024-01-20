import { Component } from '@angular/core';
import { GifsServiceService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sideBar',
  standalone:false,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(
    private gifsService:GifsServiceService
  ){}

  getTagsHistory(){
    return this.gifsService.getTagsHistory;
  }

  setBusquedaGifs(tag:string){
    this.gifsService.searchTag(tag);
  }

}
