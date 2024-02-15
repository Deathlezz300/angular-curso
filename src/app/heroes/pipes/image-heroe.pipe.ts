import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'imageHeroe'
})
export class ImageHeroePipe implements PipeTransform {

  transform(hero:Hero): unknown {

    if(!hero.id && !hero.alt_img){
      return 'assests/no-image.jpg'
    }

    if(hero.alt_img){
      return hero.alt_img
    }

    return `assets/heroes/${hero.id}.jpg`;
  }

}

