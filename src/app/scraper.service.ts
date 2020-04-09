import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  constructor(private http: HttpClient) { }
  private _data: Array<Object> = null;
  public fetching: boolean = false;
  public error: boolean = false;
  private url: string = 'https://coronavirus-19-api.herokuapp.com/countries';

  public get data(){
    if(! this._data && !this.fetching){
      this.refresh();
      return null;
    }
    return this._data;
  }

  public refresh(country:string = null){
    this.fetching = true;
    this.http.get(this.url)
          .subscribe((response: Array<Object>)=> {
            this._data = response;
            this.error = false;
            this.fetching = false;
        },
        ()=> {
          this.error = true;
          this.fetching = false;
        });
  }

  public get countries(){
    if(!this.data)
      return [];
    return this.data.map(
      (obj) => {
        return obj['country'];
      }
    );
  }

  public countryData(country='World'){
    if(!this.data)
      return {};
    return this.data.find(
      (obj) => {
        return obj['country']==country;
      }
    );
  }

  public countryFlag(country){
    var url = 'https://restcountries.eu/rest/v2/name/' + country['country'] + '?fullText=true';
    this.http.get(url)
          .subscribe((response: any)=> {
            country.flag = response[0]['flag'];
            this.error = false;
            this.fetching = false;
        },
        ()=> {
          country.flag = null;
          this.fetching = false;
        });
  }
}
