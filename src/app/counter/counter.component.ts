import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

interface form{
    valor:string
  }

@Component({
    selector:'app-counter',
    standalone:true,
    templateUrl:'./counter.component.html'
})
export class CounterComponent{

    public valor:form={} as form;
    public counter:number=0;
  
  
    aumentarCounter(){
      this.counter=this.counter+1;
    }
  
    decrementarContador(){
      this.counter=this.counter-1;
    }
  
    cambiarTexto(evento:Event){
  
      const {name,value}=evento.target as HTMLInputElement;
  
      this.valor={
        ...this.valor,
        [name]:value
      }
  
    }
  
    increaseBy(){
      this.counter+=parseInt(this.valor.valor);
    }
    
    resetCounter(){
      this.counter=0;
    }

}