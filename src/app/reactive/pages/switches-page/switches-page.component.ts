import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {


  public myForm:FormGroup=this.fb.group({
    gender:['M',[Validators.required]],
    wantNotifications:[true,[Validators.required]],
    termsAndCondition:[false,[Validators.requiredTrue]]
  })

  constructor(
    private fb:FormBuilder
  ){}

  isValidField(name:string):boolean{

    return this.myForm.controls[name].invalid &&
    this.myForm.controls[name].touched

  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return ;
    }

    const {termsAndCondition,...rest}=this.myForm.value;

    console.log(this.myForm.value)

  }

}
