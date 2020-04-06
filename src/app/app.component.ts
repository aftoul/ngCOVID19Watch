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
  constructor(private scraper: ScraperService) {}
  title = 'COVID-19 Watch';
  private _data = null;
  get data(){
    console.log(this._data=={});
    if(!this._data){
      if(this.scraper.data){
        this._data = this.scraper.data[0];
      }else{
        return {};
      }
    }
    return this._data;
  }
  country(c){
    this._data = this.scraper.countryData(c);
  }
}
