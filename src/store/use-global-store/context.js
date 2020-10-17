import { createContext } from 'react';

const booksStore = {
  books: [],
  booksCategories: [],
  bookDetails: {},
  fetchBookDetails: () => {},
  fetchBooks: () => {},
  fetchBooksCategories: () => {},
  addShelfForBook: () => {},
}

const shelvesStore = {
  shelves: [],
  shelvesBooks: {},
  shelf: {},
  booksWithShelf: {},
  createShelf: () => {},
  addBookToShelf: () => {},
}

const global = {
  isLightTheme: true,
  toggleTheme: () => {},
}

const Context = createContext({
  booksStore,
  shelvesStore,
  global

});

export default Context;
