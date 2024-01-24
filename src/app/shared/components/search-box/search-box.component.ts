import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private Debouncer:Subject<string> =new Subject<string>();
  private DebouncerSuscription?:Subscription;


  @Output()
  public onSearch:EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearch')
  public InputSearch!:ElementRef<HTMLInputElement>

  @Input()
  public placeholder!:string;

  @Input()
  public initalData?:string='';

  ngOnInit(): void {
    //Espere un segundo para ver si recibo mas valores
    //Si despues de ese segundo no recibí nada disparo el suscribe
    this.DebouncerSuscription=this.Debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.onSearch.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.DebouncerSuscription?.unsubscribe();
  }

  onSendValue(){

    const value=this.InputSearch.nativeElement.value

    this.onSearch.emit(value);

  }

  onKeyPres(searchTerm:string){
    this.Debouncer.next(searchTerm)
  }


}
