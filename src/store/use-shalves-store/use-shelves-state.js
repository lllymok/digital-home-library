import { useReducer, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { GlobalContext } from '../../store'

const initialState = {
  shelves: [
    {
      id: 'b768d286-9eea-4add-8d07-733275fee056',
      name: 'Level2',
      books: [],
      category: {
        id: 2,
        name: 'fantasy',
      },
    },
    {
      id: 'df1977ad-2a0e-40ff-9b16-d30ee433d4fb',
      name: 'level1',
      books: [],
      category: {
        id: 2,
        name: 'fantasy',
      },
    },
  ],
  shelf: {},
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
    case 'ADD_BOOK_TO_SHELF':
      state.shelves
        .find(({ id }) => id === payload.shelfId)
        .books.unshift(payload.book)
      return { ...state }

    default: {
      return state
    }
  }
}

const useShelvesState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const gg = useContext(GlobalContext)
  console.log(gg, 'g')
  // const { addShelfForBook } = useContext(GlobalContext).books


  const createShelf = (shelfDetails) => {
    dispatch({
      type: 'CREATE_SHELF',
      payload: [{ id: uuidv4(), books: [], ...shelfDetails }, ...state.shelves],
    })
  }

  const addBookToShelf = (book, shelfId) => {
    dispatch({
      type: 'ADD_BOOK_TO_SHELF',
      payload: { shelfId, book },
    })
    // addShelfForBook(shelfId);
  }

  return { ...state, createShelf, addBookToShelf }
}

export default useShelvesState
