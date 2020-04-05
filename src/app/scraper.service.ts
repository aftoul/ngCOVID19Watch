import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor() { }
  private _data = null;

  get data(){
    if(! this._data ){

    }
    return !this._data;
  }

  public refresh(){

  }

  get countries(){

    return null;
  }
}
