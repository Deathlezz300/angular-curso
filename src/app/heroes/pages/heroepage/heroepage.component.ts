import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroepage',
  templateUrl: './heroepage.component.html',
  styles: ``,
})
export class HeroepageComponent implements OnInit {
  constructor(
    private heroService: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public heroe: Hero = {} as Hero;
  public loading:boolean=true;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroe(id)))
      .subscribe((resp) => {
        if (!resp) {
          return this.router.navigateByUrl('');
        }

        this.heroe = resp;
        this.loading=false;
        return;
      });
  }


  goBack(){
    this.router.navigateByUrl('')
  }
}
