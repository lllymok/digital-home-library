import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AddToShelf } from './compoents'
import { GlobalContext } from '../../store'
import { useReviews } from '../../@shared/hooks'

const MainPage = () => {
  const { id } = useParams()
  const {
    fetchBookDetails,
    bookDetails,
    sendReview,
    booksReviews,
  } = useContext(GlobalContext).booksStore
  
  const handleReview = (review) => {
    sendReview(id, review)
  }

  const { AddReview, Reviews } = useReviews(handleReview, booksReviews[id])

  useEffect(() => {
    fetchBookDetails(id)
  }, [])

  const { name, img, category } = bookDetails



  return (
    <>
      <img src={img} />
      <div>{name}</div>
      <div>{category}</div>
      <AddToShelf />
      <AddReview  />
      <Reviews  />
    </>
  )
}

export default MainPage
