import React, { useContext } from 'react'
import styled from 'styled-components'

import Book from './book'
import { BooksContext } from '../../../store'

const BooksList = () => {
  const { books } = useContext(BooksContext)
  return (
    <Container>
      {books.map((item) => (
        <Book key={item.id} {...item} />
      ))}
    </Container>
  )
}

export default BooksList

const Container = styled.div`
  display: flex;
`
