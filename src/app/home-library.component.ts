import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllBooks , selectAuthor} from './app.selector';

@Component({
  selector: 'home-library',
  templateUrl: './home-library.component.html',
  styles: [`h2 { font-family: Lato; }`],
})
export class HomeLibraryComponent {  
  constructor(private store : Store){
  }

  author$ = this.store.pipe(select(selectAuthor));
  books$ = this.store.pipe(select(selectAllBooks))
}
