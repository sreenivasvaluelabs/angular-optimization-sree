import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { WikipediaService } from '../shared/wikipediapromise.service';
import { WikipediaSearchComponent } from './wikipediaPromise/wikipediaSearch.component';
import { WikipediaObservableService } from '../shared/wikipediaobservable.service';
import { WikipediaObservableSearchComponent } from './wikipediaObservables/wikipediaSearch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    WikipediaSearchComponent,
    WikipediaObservableSearchComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    WikipediaService,
    WikipediaObservableService
  ]
})
export class CoreModule {}
