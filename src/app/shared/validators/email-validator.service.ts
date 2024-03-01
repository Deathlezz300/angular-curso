import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
    
    
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email=control.value;

        const httpObservavle=new Observable<ValidationErrors | null>((suscriber)=>{

            if(email==='alejandro@gmail.com'){
                suscriber.next({emailTaken:true});
                suscriber.complete();
                return ;
            }

            suscriber.next(null);
            suscriber.complete()

        }).pipe(
            delay(300)
        )

        return httpObservavle;

        // return this.http.get(`https://miservicio.com/user?q=${email}`)
        // .pipe(
        //     map(res=>{
        //         return res.length===0 ? null :
        //         {emailTaken:true}
        //     }

        //     )
        // )


    }


    
}