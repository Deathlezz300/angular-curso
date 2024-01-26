import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower:string='alejandro';
  public nameUpper:string='ALEJANDRO';
  public nameTitle:string='aLeJaNdRo'

  public customDate:Date=new Date();


}
