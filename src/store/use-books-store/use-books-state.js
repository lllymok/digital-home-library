import { useReducer } from 'react'

import api from '../../api'
import { countRatingAverage } from '../../@shared/helpers'

const initialState = {
  books: [],
  booksCategories: [],
  bookDetails: {},
  booksReviews: {},
}
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: payload,
      }
    case 'ADD_RATING_FOR_BOOK':
      return {
        ...state,
        bookDetails: payload,
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
    case 'SEND_REVIEW':
      return {
        ...state,
        booksReviews: { ...state.booksReviews, ...payload },
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

  const addAverageRatingForBook = (bookId, booksWithReviews) => {
    const averageRating = countRatingAverage(booksWithReviews[bookId])
    state.bookDetails.rating = averageRating
    dispatch({type: 'ADD_RATING_FOR_BOOK', payload: state.bookDetails})
  }

  const sendReview = async (bookId, review) => {
    if (state.booksReviews[bookId]) {
      dispatch({
        type: 'SEND_REVIEW',
        payload: { [bookId]: [review, ...state.booksReviews[bookId]] },
      })
      addAverageRatingForBook(bookId, {
        [bookId]: [review, ...state.booksReviews[bookId]],
      })
    } else {
      dispatch({ type: 'SEND_REVIEW', payload: { [bookId]: [review] } })
      addAverageRatingForBook(bookId, { [bookId]: [review] })
    }
  }

  return {
    ...state,
    fetchBooks,
    fetchBooksCategories,
    fetchBookDetails,
    sendReview,
  }
}

export default useBooksState
