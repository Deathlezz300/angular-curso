import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/envionments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, of, tap,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl=environment.baseUrl;
  private user:User={} as User

  constructor(
    private httpService:HttpClient
  ) { }


  get CurrentUser():User | undefined{

    if(!this.user) return;

    return structuredClone(this.user)

  }

  login(email:string,password:string):Observable<User>{

    return this.httpService.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap((user:User)=>this.user=user),
      tap((user)=>localStorage.setItem('token','ksajdkasljdklasj'))
    );

  }

  checkAuthentication():Observable<boolean>{
    if(!localStorage.getItem('token')) return of(false);

    const token=localStorage.getItem('token');

    return this.httpService.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user=>this.user=user),
      map(user=>!!user),
      catchError(()=>of(false))
    )

  }

  logout(){
    this.user={} as User,
    localStorage.clear();
  }

}
