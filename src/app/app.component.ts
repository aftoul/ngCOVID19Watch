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
  data = {};
  country(c){
    this.data = this.scraper.countryData(c);
  }
}
