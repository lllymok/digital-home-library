import React from 'react'
import { Rating } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core'

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews?.map(({ review, rating }, index) => (
        <div key={index}>
          <Box component='fieldset' mb={3} borderColor='transparent'>
            <Typography component='legend'>Read only</Typography>
            <Rating name='read-only' value={rating} readOnly />
          </Box>
          <div>{review}</div>
        </div>
      ))}
    </div>
  )
}

export default Reviews
