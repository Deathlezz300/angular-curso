import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?:Country={} as Country;
  public isLoading:boolean=true;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countriesService:CountriesService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByCode(id))
    )
    .subscribe(resp=>{
      
      if(!resp){
        return this.router.navigateByUrl('')
      }

      this.country=resp;
      this.isLoading=false;
      return;

    })

    

  }

  // searchCountry(code:string){
  //   this.countriesService.searchCountryByCode(code)
  //     .subscribe(country=>{

  //     })
  // }

}
