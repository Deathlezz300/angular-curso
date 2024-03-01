import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  cantBeStrider(control:FormControl){


    const value:string=control.value.trim().toLowerCase();

    if(value==='strider'){
        return{
            noStrider:true
        }   
    }

    return null;

  }

  isValidField(form:FormGroup,field:string):boolean{
    return form.controls[field].invalid && 
    form.controls[field].touched;
  }

  public isFieldOneEqualsTwo(field:string,field2:string){


    return (formGroup:AbstractControl):ValidationErrors | null=>{
      const fieldValue1=formGroup.get(field);

      const fieldValeu2=formGroup.get(field2);

      if(fieldValue1!=fieldValeu2){

        formGroup.get(field2)?.setErrors({notEqual:true})

        return {
          NotEqual:true
        }
      }

      formGroup.get(field2)?.setErrors(null)

      return null;

    }

  }

}
