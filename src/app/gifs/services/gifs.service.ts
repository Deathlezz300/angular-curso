import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { APIResult, Datum } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private tagsHistory:string[]=[];
  private apiKey='fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5';
  private serviceUrl='https://api.giphy.com/v1/gifs';
  public gifList:Datum[]=[];

  constructor(
    private http:HttpClient
  ){
    this.loadLocalStorage()
  }


  get getTagsHistory():string[]{
    return [...this.tagsHistory];
  }

   searchTag(tag:string){

    this.organizeHistory(tag);

    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit','10')

     this.http.get<APIResult>(`${this.serviceUrl}/search`,{params})
     .subscribe(resp=>{
        this.gifList=resp.data
     })

    this.saveLocalStorage();

    // const {data}=await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&q=${tag}`)

    // console.log(data)

  }

  getInitalData(){

    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','20')

    this.http.get<APIResult>(`${this.serviceUrl}/trending`,{params})
    .subscribe(resp=>{
      this.gifList=resp.data
    })
  }

  private saveLocalStorage(){
    localStorage.setItem('history',JSON.stringify(this.tagsHistory));
    localStorage.setItem('data',JSON.stringify(this.gifList))
  }

  private loadLocalStorage(){
    if(localStorage.getItem('history')){
      const data=JSON.parse(localStorage.getItem('history')!)
      this.tagsHistory=data;
      this.searchTag(this.tagsHistory[0]);
      console.log("hola")
    }else{
      this.getInitalData()
    }
    
  }

  private organizeHistory(tag:string){
    
    tag=tag.toLocaleLowerCase();

    if(tag.length===0) return ;

    if(this.tagsHistory.includes(tag)){
      this.tagsHistory=this.tagsHistory.filter(tg=>tg!=tag)
    }

    // if(this.tagsHistory.length>=10){
    //   this.tagsHistory.pop()
    // }

    this.tagsHistory.unshift(tag);

    this.tagsHistory=this.tagsHistory.splice(0,10)

  }

}
//api.giphy.com/v1/gifs/search?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&q=valorant