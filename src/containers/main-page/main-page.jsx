import React, { useContext, useEffect } from 'react'

import { BooksContext } from '../../store'
import { BooksList } from './components'

const MainPage = () => {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <BooksList />
    </>
  )
}

export default MainPage
