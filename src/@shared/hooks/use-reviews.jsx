import React from 'react'
import { AddReview as ReviewFrom, Reviews as ReviewsList } from '../../@shared/components'

const useReviews = (sendReview, reviews) => {

  const AddReview = () => <ReviewFrom sendReview={sendReview} />
  const Reviews = () => <ReviewsList reviews={reviews} />
  return {
    AddReview,
    Reviews,
  }
}

export default useReviews