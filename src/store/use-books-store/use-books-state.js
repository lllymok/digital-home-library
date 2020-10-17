import { useReducer } from 'react'

import api from '../../api'

const initialState = {
  books: [],
  booksCategories: [],
  bookDetails: {},
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: payload,
      }
    case 'FETCH_BOOK_DETAILS':
      return {
        ...state,
        bookDetails: payload,
      }
    case 'FETCH_BOOKS_CATEGORIES':
      return {
        ...state,
        booksCategories: payload,
      }
    case 'ADD_SHELF_FOR_BOOK':
      return {
        ...state,
        booksCategories: payload,
      }
    default: {
      return state
    }
  }
}

const useBooksState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchBooks = async () => {
    try {
      const data = await api.books.getBooks()
      dispatch({ type: 'FETCH_BOOKS', payload: data })
    } catch (e) {
      console.log(e, 'e')
    }
  }

  const fetchBookDetails = async (id) => {
    try {
      const booksArray = await api.books.getBookDetails(id)
      const data = booksArray.find((item) => item.id === +id)
      dispatch({ type: 'FETCH_BOOK_DETAILS', payload: data })
    } catch (e) {
      console.log(e, 'e')
    }
  }

  const fetchBooksCategories = async () => {
    try {
      const data = await api.books.getBooksCategories()
      dispatch({ type: 'FETCH_BOOKS_CATEGORIES', payload: data })
    } catch (e) {
      console.log(e, 'e')
    }
  }

  return { ...state, fetchBooks, fetchBooksCategories, fetchBookDetails }
}

export default useBooksState
