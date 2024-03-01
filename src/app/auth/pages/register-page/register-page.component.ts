import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/services/validator.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public myForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.pattern(firstNameAndLastnamePattern)]],
    email:['',[Validators.required,Validators.pattern(emailPattern)],[this.emailValidator]],
    username:['',[Validators.required,cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]]
  },{
    validators:[
      this.validatorService.isFieldOneEqualsTwo('password','password2')
    ]
  });


  constructor(
    private fb:FormBuilder,
    private validatorService:ValidatorService,
    private emailValidator:EmailValidator
  ){}


  onSumbit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }



  }

  validField(field:string):boolean{
    return this.validatorService.isValidField(this.myForm,field);
  }

}
