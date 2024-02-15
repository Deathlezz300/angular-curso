import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginpageComponent,
    RegisterpageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    
  ]
})
export class AuthModule { }
