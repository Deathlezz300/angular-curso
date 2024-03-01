import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  constructor(
    private fb:FormBuilder
  ){}

  public myForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames:this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Strandgin',Validators.required]
    ]),
  })

  public newFavorite:FormControl=new FormControl('',
  [Validators.required])

   get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField(field:string){
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched
  }

  getFiledError(field:string):string | null{

    if(!this.myForm.controls[field]) return null;

    const errors=this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key){
        case 'required':
          return 'Este campo es requerido'

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`
      }
    }

    return '';

  }

  isValidFieldInArray(formArray:FormArray,i:number){

    return formArray.controls[i].errors
    && formArray.controls[i].touched

  }

  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    console.log(this.myForm.value);

    (this.myForm.controls['favoriteGames'] as FormArray)=this.fb.array([])

    this.myForm.reset()

  }

  onDeleteElement(index:number){

    this.favoriteGames.removeAt(index)
  
  }


  onAddFavorite(){
    if(this.newFavorite.invalid) return ;

    const newGame=this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame,[
      Validators.required
    ]))

    this.newFavorite.reset();

  }

}