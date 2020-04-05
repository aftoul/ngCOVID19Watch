import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(private http: HttpClient) { }
  private _data: Array<Object> = null;
  public fetching: boolean = false;
  private url: string = 'https://coronavirus-19-api.herokuapp.com/countries';

  public get data(){
    if(! this._data && !this.fetching){
      this.refresh();
    }
    return this._data;
  }

  public refresh(country:string = null){
    this.fetching = true;
    this.http.get(this.url)
          .subscribe((response: Array<Object>)=> {
            this._data = response;
            this.fetching = false;
        });
  }

  public get countries(){
    return this.data.map(
      (obj) => {
        return obj['country'];
      }
    );
  }

  public countryData(country='World'){
    return this.data.find(
      (obj) => {
        return obj['country']==country;
      }
    );
  }
}
