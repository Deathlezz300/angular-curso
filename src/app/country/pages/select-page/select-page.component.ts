import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { filter, map, switchMap, tap } from 'rxjs';
import { Region, SmallCountry } from '../../interfaces/country.interface';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styles: ``
})
export class SelectPageComponent implements OnInit {

  constructor(
    private countryService:CountryService,
    private fb:FormBuilder
  ){}

  public myForm=this.fb.group({
    region:['',Validators.required],
    country:['',Validators.required],
    borders:['',Validators.required]
  })

  public countries:SmallCountry[]=[];
  public borders:SmallCountry[]=[];

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get Regions(){
    return this.countryService.Regions;
  }


  onRegionChanged():void{
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(()=>this.myForm.get('country')!.setValue('')),
      tap(()=>this.borders=[]),
      switchMap(region=>this.countryService.getCountriesByRegion(region as Region))
    )
    .subscribe(countries=>{
      this.countries=countries;
    });
  }

  onCountryChanged():void{
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(()=>this.myForm.get('borders')!.setValue('')),
      filter((value:any)=>value.length>0),
      switchMap(code=>this.countryService.getFrontersByCountry(code!)),
      switchMap(country=>this.countryService.getBordersByCode(country.borders)),
    )
    .subscribe(country=>{
      this.borders=country;
    });
  }


}
