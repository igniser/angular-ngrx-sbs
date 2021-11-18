import { createSelector } from '@ngrx/store';
import { AppState, Author, Book } from './app.state';

export const selectAuthor = (state: AppState) => state.author;

export const selectAllBooks = (state: AppState) => state.books;

export const selectVisibleBooks = createSelector(
  selectAuthor,
  selectAllBooks,
  (author: Author, books:Book[]) => {
    if (author && books) {
      return books.filter( b => b.authorId == author.id)
    }
    else {
      return books;
    }
  }
);