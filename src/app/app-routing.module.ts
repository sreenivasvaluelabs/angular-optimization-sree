import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { WikipediaSearchComponent } from './core/wikipediaPromise/wikipediaSearch.component';
import { WikipediaObservableSearchComponent } from './core/wikipediaObservables/wikipediaSearch.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'wikipediaPromise', component: WikipediaSearchComponent },
  { path: 'wikipediaObservables', component: WikipediaObservableSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
