import api from './api-config';

export default {
  getBooks: () => api.get(`/books`),
  getBooksCategories: () => api.get(`/books/categories`),
  getBookDetails: (id) => api.get(`/books/details/${id}`),
};
