import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { countRatingAverage } from '../../@shared/helpers'

const initialState = {
  shelves: [
    {
      id: 'b768d286-9eea-4add-8d07-733275fee056',
      name: 'Level2',
      category: {
        id: 2,
        name: 'fantasy',
      },
    },
    {
      id: 'df1977ad-2a0e-40ff-9b16-d30ee433d4fb',
      name: 'level1',
      category: {
        id: 2,
        name: 'fantasy',
      },
    },
  ],
  shelvesBooks: {},
  booksWithShelf: {},
  shelfReviews: {},
  shelfDetails: {},
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_BOOKS':
      return {
        ...state,
        books: payload,
      }
    case 'CREATE_SHELF':
      return {
        ...state,
        shelves: payload,
      }
    case 'FETCH_SHELF_DETAILS':
      return {
        ...state,
        shelfDetails: payload,
      }
    case 'ADD_BOOK_TO_SHELF':
      return { ...state, shelvesBooks: { ...state.shelvesBooks, ...payload } }
    case 'ADD_SHELF_TO_BOOK':
      return {
        ...state,
        booksWithShelf: { ...state.booksWithShelf, ...payload },
      }
      case 'SEND_SHELF_REVIEW':
        return {
          ...state,
          shelfReviews: { ...state.shelfReviews, ...payload },
        }

    default: {
      return state
    }
  }
}

const useShelvesState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const createShelf = (shelfDetails) => {
    dispatch({
      type: 'CREATE_SHELF',
      payload: [{ id: uuidv4(), books: [], ...shelfDetails }, ...state.shelves],
    })
  }

  const addShelfToBook = (bookId, shelfId) => {
    const shelfById = state.shelves.find(({ id }) => id === shelfId)
    dispatch({
      type: 'ADD_SHELF_TO_BOOK',
      payload: { [bookId]: shelfById },
    })
  }

  const addBookToShelf = (book, shelfId) => {
    const booksByShelfId = state.shelvesBooks[shelfId]

    if (booksByShelfId) {
      dispatch({
        type: 'ADD_BOOK_TO_SHELF',
        payload: { [shelfId]: [book, ...booksByShelfId] },
      })
    } else {
      dispatch({
        type: 'ADD_BOOK_TO_SHELF',
        payload: { [shelfId]: [book] },
      })
    }

    addShelfToBook(book.id, shelfId)
  }

  const addAverageRatingForShlef = (shelfId, shelfReviews) => {
    const averageRating = countRatingAverage(shelfReviews[shelfId])
    state.shelfDetails.rating = averageRating
    dispatch({ type: 'ADD_RATING_FOR_SHELF', payload: state.shelfDetails })
  }

  const sendShelfReview = async (shelfId, review) => {
    if (state.shelfReviews[shelfId]) {
      dispatch({
        type: 'SEND_SHELF_REVIEW',
        payload: { [shelfId]: [review, ...state.shelfReviews[shelfId]] },
      })
      addAverageRatingForShlef(shelfId, {
        [shelfId]: [review, ...state.shelfReviews[shelfId]],
      })
    } else {
      dispatch({ type: 'SEND_SHELF_REVIEW', payload: { [shelfId]: [review] } })
      addAverageRatingForShlef(shelfId, { [shelfId]: [review] })
    }
  }

  const fetchShelfDetails = async (id) => {
    try {
      const data = state.shelves.find((item) => item.id === id)
      dispatch({ type: 'FETCH_SHELF_DETAILS', payload: data })
    } catch (e) {
      console.log(e, 'e')
    }
  }

  return { ...state, createShelf, addBookToShelf, sendShelfReview, fetchShelfDetails }
}

export default useShelvesState
