import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatComponent } from './classes/cat/cat.component';
import { AnimalComponent } from './classes//animal/animal.component';
import { DogComponent } from './classes/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    AnimalComponent,
    DogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
