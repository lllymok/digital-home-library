import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { AddToShelf } from './compoents'
import { GlobalContext } from '../../store'
import { AddReview, Reviews } from '../../@shared/components'

const MainPage = () => {
  const { id } = useParams()
  const {
    fetchBookDetails,
    bookDetails,
    sendReview,
    booksReviews,
  } = useContext(GlobalContext).booksStore

  useEffect(() => {
    fetchBookDetails(id)
  }, [])

  const { name, img, category } = bookDetails

  const handleReview = (review) => {
    sendReview(id, review)
  }

  return (
    <>
      <img src={img} />
      <div>{name}</div>
      <div>{category}</div>
      <AddToShelf />
      <AddReview sendReview={handleReview} />
      <Reviews reviews={booksReviews[id]} />
    </>
  )
}

export default MainPage
