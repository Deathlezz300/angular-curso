import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  constructor(
    private countriesService:CountriesService
  ){}

  public countries:Country[]=[];
  public initalData?:string;


  ngOnInit(): void {
    this.initalData=this.countriesService.cacheStore.ByCountries.term;
    this.countries=this.countriesService.cacheStore.ByCountries.countries;
  }

  searchCountry(term:string){
      this.countriesService.searchCountry(term)
      .subscribe(countries=>{
        this.countries=countries
      })
  }

}
