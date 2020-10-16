import MockAdapter from 'axios-mock-adapter';
import books from './books.json'
import categories from './categories.json'
import api from '../api/api-config';

const apiMock = new MockAdapter(api, { delayResponse: 50 });

apiMock
  /* ====================== Books ===================== */
  // Get books list
  .onGet('/books')
  .reply(200, books)
  
    /* ====================== Book ===================== */
  // Get book details
  .onGet(/\/books\/details\/\d+/)
  .reply(200, books)

    /* ====================== Books categories ===================== */
  // Get book details
  .onGet('/books/categories')
  .reply(200, categories)
