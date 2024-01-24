import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { cacheStore } from '../interfaces/chae-store';

@Injectable({providedIn: 'root'})
export class CountriesService{

    constructor(
        private httpClient:HttpClient
    ) { this.LoadToLocalStorage() }

    private apiUrl:string='https://restcountries.com/v3.1'

    public cacheStore:cacheStore={
        ByCapital:{
            term:'',
            countries:[]
        },
        ByCountries:{
            term:'',
            countries:[]
        },
        ByRegion:{
            term:'',
            countries:[]
        }
    }

    private saveToLocalStorage(){
        localStorage.setItem('data',JSON.stringify(this.cacheStore))
    }

    private LoadToLocalStorage(){
        if(localStorage.getItem('data')){
            const data=JSON.parse(localStorage.getItem('data')!);
            this.cacheStore=data;
        }
    }


    private getCountriesRequest(url:string):Observable<Country[]>{

        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError(()=>of([])),
            //delay(200)
        )

    }

    searchCountryByCode(code:string):Observable<Country | null>{

        return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
        .pipe(
            map(countries=>countries.length>0 ? countries[0] : null),
            catchError(error=>of(null))
        );

    }

    searchCapital(term:string):Observable<Country[]>{

        const url=`${this.apiUrl}/capital/${term}`
        //Captura el error y regrese un nuevo Observable con la data que le pasemos
        return this.getCountriesRequest(url)
        .pipe(
            tap(countries=>this.cacheStore.ByCapital={term,countries}),
            tap(()=>this.saveToLocalStorage())
        )

    }

    searchCountry(term:string){

        const url=`${this.apiUrl}/name/${term}`

        return this.getCountriesRequest(url)
        .pipe(
            tap(countries=>this.cacheStore.ByCountries={term,countries}),
            tap(()=>this.saveToLocalStorage())
        )

    }

    searchByRegion(term:string){

        const url=`${this.apiUrl}/region/${term}`

        return this.getCountriesRequest(url)
        .pipe(
            tap(countries=>this.cacheStore.ByRegion={term,countries}),
            tap(()=>this.saveToLocalStorage())
        )
    }

    //pais:https://restcountries.com/v3.1/name/{name}
    //region:https://restcountries.com/v3.1/region/{region}
    
}