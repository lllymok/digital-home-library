import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { Sidebar } from '../../@shared/components'
import { GlobalContext } from '../../store'
import { BooksList } from './components'

const MainPage = () => {
  const { fetchBooks } = useContext(GlobalContext).booksStore

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Content>
      <Sidebar />
      <BooksList />
    </Content>
  )
}

export default MainPage


const Content = styled.div`
  position: relative;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 48px;
`

