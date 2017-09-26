import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { FilterFoodsPipe } from './filter-foods.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFormComponent,
    FilterFoodsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
