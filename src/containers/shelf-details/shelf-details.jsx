import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GlobalContext } from '../../store'
import { useReviews } from '../../@shared/hooks'

const ShelfDetails = () => {
  const { id } = useParams()
  const {
    shelfReviews,
    shelfDetails,
    sendShelfReview,
    fetchShelfDetails,
  } = useContext(GlobalContext).shelvesStore

  const handleReview = (review) => {
    sendShelfReview(id, review)
  }

  const { AddReview, Reviews } = useReviews(handleReview, shelfReviews[id])


  useEffect(() => {
    fetchShelfDetails(id)
  }, [])
  
  const { name } = shelfDetails

  return (
    <div>
      <div>{name}</div>
      <AddReview sendReview={handleReview} />
      <Reviews reviews={shelfReviews[id]} />
    </div>
  )
}

export default ShelfDetails
