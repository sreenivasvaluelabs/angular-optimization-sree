import { Component } from '@angular/core';
import { WikipediaService } from '../../shared/wikipediapromise.service';


@Component({
  selector: 'wikipedia-search',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input #term type="text" (keyup)="search(term.value)">
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>
    </div>  
  `
})
export class WikipediaSearchComponent {
  items: Array<string>;
  
  constructor(private wikipediaService: WikipediaService) {}
  
  search(term) {
    this.wikipediaService.search(term).then(items => this.items = items);
  }  
}