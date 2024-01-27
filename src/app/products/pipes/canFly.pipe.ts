import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'CanFly'
})

export class CanFly implements PipeTransform {
    transform(value:boolean): string {
        
        return value ? 'Vuela' : 'No vuela'

    }
}