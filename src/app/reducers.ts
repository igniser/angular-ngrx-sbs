import { createReducer , on } from '@ngrx/store';
import { setAuthorAction, setBooksAction } from './actions';

const initAuthorState = {id: 0, name: 'john doe'};

export const authorReducer = createReducer(initAuthorState, on( setAuthorAction, (state, {author})=> author ));

const initBooksState = [];

export const booksReducer = createReducer(initBooksState, on( setBooksAction, (state, { books })=> [...books] ));
