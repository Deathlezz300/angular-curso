import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from '../../../environments/envionments';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private httpClient:HttpClient) { }

   getHeroes():Observable<Hero[]>{

    return this.httpClient.get<Hero[]>(`${environment.baseUrl}/heroes`);

  }

  getHeroe(id:string):Observable<Hero | undefined>{
    return this.httpClient.get<Hero>(`${environment.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(()=>of(undefined))
    );
  }


  getSuggestions(query:string):Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${environment.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  addHeroe(hero:Hero):Observable<Hero>{
    return this.httpClient.post<Hero>(`${environment.baseUrl}/heroes`,hero);
  }

  updateHero(hero:Hero):Observable<Hero>{
    if(!hero.id) throw Error('Hero id es a must')
    return this.httpClient.patch<Hero>(`${environment.baseUrl}/heroes/${hero.id}`,hero);
  }

  deleteHeroByID(id:string):Observable<boolean>{
    return this.httpClient.delete<boolean>(`${environment.baseUrl}/heroes/${id}`)
    .pipe(
      map(res=>true),
      catchError(()=>of(false))
    );
  }

}
