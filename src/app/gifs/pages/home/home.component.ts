import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private gifService:GifsServiceService
  ){}


  get getGifs(){
    return this.gifService.gifList;
  }


}
