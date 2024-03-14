import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, combineLatest, filter, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private regions:Region[]=[Region.Africa,Region.America
  ,Region.Asia,Region.Europe,Region.Oceania];

  private baseUrl='https://restcountries.com/v3.1';

  constructor(
    private httpClient:HttpClient
  ) { }

  get Regions():Region[]{
    return [...this.regions];
  }

  getCountriesByRegion(region:Region):Observable<SmallCountry[]>{

    if(!region) return of([]);

    return this.httpClient.get<Country[]>(`${this.baseUrl}/region/${region.toLowerCase()}?fields=cca3,name,borders`)
    .pipe(
      map(countries=>countries.map(country=>({
        name:country.name.common,
        cca3:country.cca3,
        borders:country.borders ?? []
      })))
    );
  }


  getFrontersByCountry(countryCode:string):Observable<SmallCountry>{

    const url=`${this.baseUrl}/alpha/${countryCode}?fields=cca3,name,borders`;

    return this.httpClient.get<Country>(url)
    .pipe(
      map(country=>({
        name:country.name.common,
        cca3:country.cca3,
        borders:country.borders ?? []
      }))
    );
  }

  getBordersByCode(borders:string[]):Observable<SmallCountry[]>{

    if(!borders || borders.length===0) return of([]);

    const countryRequest:Observable<SmallCountry>[] =[];

    borders.forEach(border=>{
      const request=this.getFrontersByCountry(border);
      countryRequest.push(request);
    })

    return combineLatest(countryRequest);

  }

}
