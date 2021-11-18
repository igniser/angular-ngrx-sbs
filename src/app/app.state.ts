export interface AppState {
  author: any;
  books: Book[];
}

export interface Author {
  id: any;
  name: any;
}
export interface Book {
  authorId: any;
  title: any;
  description: any;
  publishDate: any;
}
