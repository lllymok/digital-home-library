import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../../store'
import { BooksList } from './components'

const MainPage = () => {
  const { fetchBooks } = useContext(GlobalContext).booksStore

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
