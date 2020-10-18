import { createContext } from 'react';

const booksStore = {
  books: [],
  booksCategories: [],
  bookDetails: {},
  booksReviews: {},
  fetchBookDetails: () => {},
  fetchBooks: () => {},
  fetchBooksCategories: () => {},
  addShelfForBook: () => {},
  sendReview: () => {},
}

const shelvesStore = {
  shelves: [],
  shelvesBooks: {},
  booksWithShelf: {},
  shelfReviews: {},
  shelfDetails: {},
  createShelf: () => {},
  addBookToShelf: () => {},
  sendShelfReview: () => {},
  fetchShelfDetails: () => {},
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
