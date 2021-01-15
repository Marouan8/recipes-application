import { Actions, ofType } from '@ngrx/effects';
import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../recipes/sotre/recipe.actions';
import { take, map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipesResloverService implements Resolve<Recipe[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private recipeService: RecipeService,
    private actions$: Actions
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    //const recipes = this.recipeService.getRecipes();

    return this.store.select('recipes').pipe(
        take(1),
        map(recipesState=> {
        return recipesState.recipes;
    }), 
        switchMap(recipes=> {
        if(recipes.length === 0) {
            this.store.dispatch(new RecipeActions.FetchRecipes());
            return this.actions$.pipe(ofType(RecipeActions.SET_RECIPES), take(1));
        }else {
           return of(recipes) 
        }
    }))    
  }
}
