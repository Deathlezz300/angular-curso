import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone:false,
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent {

  @Input('publicUrl')
  public url!:string;

  public hasLoaded:boolean=false;

  onLoad(){
    this.hasLoaded=true;
  }

  

}
