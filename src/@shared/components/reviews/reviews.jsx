import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core'
import styled from 'styled-components'

const Reviews = ({ reviews }) => {
  return (
    <Container>
      {reviews?.map(({ review, rating }, index) => (
        <ReviewContainer key={index}>
          <Rating name='read-only' value={rating} readOnly />
          <Review>{review}</Review>
        </ReviewContainer>
      ))}
    </Container>
  )
}

export default Reviews

const ReviewContainer = styled.div`
  margin-top: 8px;
`

const Container = styled.div`
  margin-top: 12px;
  ${ReviewContainer} {
    :not(:last-child) {
      border-bottom: solid 1px #ddeaf5;
      padding-bottom: 8px;
    }
  }
`
const Review = styled.div`
  margin-left: 4px;
`
