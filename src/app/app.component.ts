import { Component } from '@angular/core';
import { ScraperService } from './scraper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    ScraperService
  ]
})
export class AppComponent {
  constructor(public scraper: ScraperService) {}
  title = 'COVID-19 Watch';
  private _data = null;
  get data(){
    if(!this._data){
      if(this.scraper.data){
        this.country(this.scraper.data[0]['country']);
      }else{
        return {};
      }
    }
    return this._data;
  }
  country(c){
    this._data = this.scraper.countryData(c);
    if(!this._data.flag)
      this.scraper.countryFlag(this._data);
  }
}
