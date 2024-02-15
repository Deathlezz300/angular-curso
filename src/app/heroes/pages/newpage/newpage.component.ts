import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styles: ``
})
export class NewpageComponent implements OnInit {

  constructor(
    private heroService:HeroeService,
    private actiavedRoute:ActivatedRoute,
    private router:Router,
    private Snackbar:MatSnackBar,
    private dialog:MatDialog
  ){}

  public heroForm=new FormGroup({
    id:new FormControl<string>(''),
    superhero:new FormControl<string>('',{}),
    publisher:new FormControl<Publisher>('' as Publisher),
    alter_ego:new FormControl(''),
    first_appearance:new FormControl(''),
    characters:new FormControl(''),
    alt_img:new FormControl('')
  })

  public publishers=[
    {
      id:'DC Comics',
      value:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      value:'Marvel - Comics'
    }
  ]

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) return ;

    this.actiavedRoute.params
    .pipe(
      switchMap(({id})=>this.heroService.getHeroe(id))
    )
    .subscribe((hero)=>{

      if(!hero){
        return this.router.navigateByUrl('/');
      }

      this.heroForm.reset(hero);
      return;
    })
  }

  get currentHero():Hero{
    const hero=this.heroForm.value as Hero;

    return hero;
  }

  onSubmit():void{
    if(this.heroForm.invalid){
      return;
    }

    if(this.currentHero.id){
      this.heroService.updateHero(this.currentHero)
      .subscribe(res=>{
        this.showSnackBar(`${res.superhero} updated`)
      });
      return;
    }

    const hero=this.currentHero;
    console.log(hero.publisher.split(' '))
    hero.id=hero.publisher.split(' ')[0].toLowerCase()+'-'+hero.superhero.toLowerCase()
    console.log(hero)
    this.heroService.addHeroe(hero)
    .subscribe(res=>{
      this.router.navigate(['/heroes/edit',res.id])
      this.showSnackBar(`${res.superhero} created`)
    });
  }

  onDeleteHeroe(){
    if(!this.currentHero.id) throw Error('Hero id es required')

    const dialogRef=this.dialog.open(DialogComponent,{
      data:this.heroForm.value
    })

    // dialogRef.afterClosed().subscribe(result=>{
    //   if(!result) return ;

    //   this.heroService.deleteHeroByID(this.currentHero.id)
    //   .subscribe(res=>{
    //       if(res){
    //         this.router.navigateByUrl('/')
    //       }
    //   })

    // })
    
    dialogRef.afterClosed()
    .pipe(
      filter((res:boolean)=>res),
      switchMap(()=>this.heroService.deleteHeroByID(this.currentHero.id)),
      filter((wasDeleted:boolean)=>wasDeleted)
    )
    .subscribe(result=>{
      this.router.navigateByUrl('/')
    })

  }

  showSnackBar(message:string){
    this.Snackbar.open(message,'done',{
      duration:2500
    })
  }

}
