import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './recipes/shoppinglist/shoppinglist/shoppinglist.component';
import { ShoppingListEditComponent } from './recipes/shoppinglist/shoppinglist/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipeBook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipeBook/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
