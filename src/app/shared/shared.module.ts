import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GifsServiceService } from '../gifs/services/gifs.service';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SideBarComponent
  ],
  providers:[
    GifsServiceService
  ]
})
export class SharedModule { }
