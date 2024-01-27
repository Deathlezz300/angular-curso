import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'SortBy'
})

export class SortBy implements PipeTransform {
    transform(value:hero[],sort?:keyof hero | null | ''): hero[] {
        
        switch(sort){
            case 'name':
                return value.sort((a,b)=>{
                    return a.name>b.name ? 1 : -1
                })

            case 'canFly':
                return value.sort((a,b)=>{
                    return a.canFly>b.canFly ? 1 : -1
                })

            case 'color':
                return value.sort((a,b)=>{
                    return a.color> b.color ? 1 : -1
                })

            default:
                return value
        }

    }
}