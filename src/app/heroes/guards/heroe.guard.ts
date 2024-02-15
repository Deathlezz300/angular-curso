import { CanActivateFn } from '@angular/router';
import {  Injectable, inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn:'root'
})
export class PrivateHeroeGuard{


  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  checkStatus():Observable<boolean> | boolean{
    return this.authService.checkAuthentication()
    .pipe(
      tap(isAuth=>{
        if(!isAuth){
          this.router.navigateByUrl('/auth/login')
        }
      }),
      map(isAuth=>isAuth)
    )    
  }

}


export const PrivateheroeGuardCanActivate: CanActivateFn = (route, state) => {
  return inject(PrivateHeroeGuard).checkStatus();
};

export const PrivateHeroeGuardCanMatch:CanMatchFn=(route:Route,segmnest:UrlSegment[])=>{
  return inject(PrivateHeroeGuard).checkStatus()
}
