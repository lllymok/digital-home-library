import React, { useContext } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../../../store'
import { Book } from '../../../@shared/components'

const BooksList = () => {
  const { books } = useContext(GlobalContext).booksStore
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
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 130px 130px 130px 130px 130px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
`
