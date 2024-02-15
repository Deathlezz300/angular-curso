import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styles: ``
})
export class LoginpageComponent {

  public loginForm=new FormGroup({
    email:new FormControl('',{nonNullable:true}),
    password:new FormControl('',{nonNullable:true})
  })

  constructor(
    private authService:AuthService,
    private router:Router
  ){}


  onSumbit(){

    if(this.loginForm.invalid) return; 

    this.authService.login(this.loginForm.value.email!,
      this.loginForm.value.password!)
      .subscribe(res=>{
        if(!res) return ;

        this.router.navigateByUrl('/')
        return;

      })
  }

}
