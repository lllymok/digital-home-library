import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AddToShelf } from './compoents'
import { GlobalContext } from '../../store'

const MainPage = () => {
  const { id } = useParams()
  const { fetchBookDetails, bookDetails } = useContext(GlobalContext).booksStore

  useEffect(() => {
    fetchBookDetails(id)
  }, [])

  const { name, img } = bookDetails

  return (
    <>
      <img src={img} />
      <div>{name}</div>
      <AddToShelf />
    </>
  )
}

export default MainPage
