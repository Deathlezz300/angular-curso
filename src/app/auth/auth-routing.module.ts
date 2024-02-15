import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { authGuardCanActivate, authGuardCanMatch } from './guards/auth.guard';

const Routes:Routes=[
    {
        path:'',
        component:LayoutPageComponent,
        children:[
            {
                path:'login',
                component:LoginpageComponent,
                canActivate:[authGuardCanActivate],
                canMatch:[authGuardCanMatch]
            },
            {
                path:'register',
                component:RegisterpageComponent,
                canActivate:[authGuardCanActivate],
                canMatch:[authGuardCanMatch]
            },
            {
                path:'**',
                redirectTo:'login'
            }
        ]      
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(Routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AuthRoutingModule { }
