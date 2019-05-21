import { Component } from '@angular/core';


import { Observable } from 'rxjs/Rx';
import { WikipediaObservableService } from '../../shared/wikipediaobservable.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'wikipedia-search',
  template: `
    <div>
      <h2>Wikipedia Search</h2>
      <input type="text" [formControl]="term">
      <ul>
        <li *ngFor="let item of items | async">{{item}}</li>
      </ul>
    </div>  
  `
})
export class WikipediaObservableSearchComponent {

  items: Observable<Array<string>>;
  term = new FormControl();
  
  constructor(private wikipediaObservableService: WikipediaObservableService) {}
  
  ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.wikipediaObservableService.search(term));
  }
}

