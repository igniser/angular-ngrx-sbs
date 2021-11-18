import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeLibraryComponent } from './home-library.component';
import { authorReducer, booksReducer } from './reducers'

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    StoreModule.forRoot({ author: authorReducer, books: booksReducer})],
  declarations: [ AppComponent, HelloComponent, HomeLibraryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
