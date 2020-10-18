import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GlobalContext } from '../../store'
import { AddReview, Reviews } from '../../@shared/components'

const ShelfDetails = () => {
  const { id } = useParams()
  const {
    shelfReviews,
    shelfDetails,
    sendShelfReview,
    fetchShelfDetails,
  } = useContext(GlobalContext).shelvesStore

  useEffect(() => {
    fetchShelfDetails(id)
  }, [])

  const { name } = shelfDetails

  const handleReview = (review) => {
    sendShelfReview(id, review)
  }

  return (
    <div>
      <div>{name}</div>
      <AddReview sendReview={handleReview} />
      <Reviews reviews={shelfReviews[id]} />
    </div>
  )
}

export default ShelfDetails
