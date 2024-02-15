import { AuthService } from '../services/auth.service';
import {  Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class PublicAuthGuard{


  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  checkStatus():Observable<boolean> | boolean{
    return this.authService.checkAuthentication()
    .pipe(
      tap(isAuth=>{
        if(isAuth){
          this.router.navigateByUrl('/heroes')
        }
      }),
      map(isAuth=>!isAuth)
    )    
  }

}


export const authGuardCanActivate: CanActivateFn = (route, state) => {
  return inject(PublicAuthGuard).checkStatus();
};

export const authGuardCanMatch: CanMatchFn = (route:Route, segments:UrlSegment[]) => {
  return inject(PublicAuthGuard).checkStatus();
};
