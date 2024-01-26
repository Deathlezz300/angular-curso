import { Component } from '@angular/core';
import {interval, tap} from 'rxjs'

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrl: './un-common-page.component.css'
})
export class UnCommonPageComponent {

  //i18nSelect

  public name :string='Fernando';
  public gender:'male'| 'female'='female';
  public invitationMao={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name='Alejandro';
    this.gender='male'
  }

  //i18nPlural
  public clients:string[]=['Maria','Pedro','Fernando','Eduardo','Melissa'];

  public clientsMap={
    '=0':'no tenemos clientes esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  BorrarCliente(){
    this.clients.pop();
  }

  //KeyValuePipe

  public persona={
    name:'Fernando',
    age:36,
    addres:'mondongo'
  }

  //AsyncPipe

  public myObservableTimer=interval(2000).pipe(
    tap(value=>console.log(value))
  )

  public promiseValue:Promise<string>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Hay data en la promesa')
    },2000)
  })

}
