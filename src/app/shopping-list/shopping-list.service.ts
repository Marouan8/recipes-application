import { Ingredient } from './../shared/ingredient.model';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientsChanged = new Subject<Ingredient[]>();
  // startedEdditing = new Subject<number>();
  // private ingerdients: Ingredient[]=  [
  //   new Ingredient('apples', 5),
  //   new Ingredient('tomatoes', 10)
  // ];
  // constructor() { }

  // getIngredients() {
  //   return this.ingerdients.slice()
  // }

  // addIngredient(ingredient: Ingredient) {
  //   this.ingerdients.push(ingredient)
  //   this.ingredientsChanged.next(this.ingerdients.slice())
  // }

  // addIngredients(ingredients: Ingredient[]) {
  //   // for(let ingrendient of ingredients) {
  //   //     this.addIngredient(ingrendient)
  //   // }

  //   this.ingerdients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingerdients.slice())
  // }

  // getIngredient(index: number) {
  //   return this.ingerdients[index]
  // }

  // updateIngredient(index: number, newIngredient: Ingredient) {
  //   this.ingerdients[index] = newIngredient;
  //   this.ingredientsChanged.next(this.ingerdients.slice())
  // }

  // deleteIngredient(index: number) {
  //   this.ingerdients.splice(index, 1)
  //   this.ingredientsChanged.next(this.ingerdients.slice())
  // }
}
