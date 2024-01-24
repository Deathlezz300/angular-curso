import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries:Country[]=[];
  public regions:string[]=['africa','americas','asia','europe','oceania']
  public SelecteRegion:string='';

  constructor(
    private countriesService:CountriesService
  ){}

  ngOnInit(): void {
    this.SelecteRegion=this.countriesService.cacheStore.ByRegion.term;
    this.countries=this.countriesService.cacheStore.ByRegion.countries;
  }

  searchByRegion(term:string){
    this.SelecteRegion=term;
    this.countriesService.searchByRegion(term)
    .subscribe(countries=>{
      this.countries=countries
    })
  }

}
