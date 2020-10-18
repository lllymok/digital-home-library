import React, { useState } from 'react'
import { Rating } from '@material-ui/lab'
import {
  TextareaAutosize,
  Box,
  Typography,
  InputLabel,
  Button,
} from '@material-ui/core'

const AddReview = ({ sendReview }) => {
  const [review, setReview] = useState('')
  const [rating, setRating] = React.useState(0)

  const onChagngeReview = (event) => setReview(event.target.value)
  const onChangeRating = (rating) => setRating(rating)

  const clearData = () => {
    setReview('')
    setRating(0)
  }

  const handleClick = () => {
    sendReview({ review, rating })
    clearData();
  }

  return (
    <>
      {/* {render({ review, rating }, clearData)} */}
      <div>
        <Box component='fieldset' mb={3} borderColor='transparent'>
          <Typography component='legend'>Controlled</Typography>
          <Rating
            name='simple-controlled'
            value={rating}
            onChange={(event, newValue) => onChangeRating(newValue)}
          />
        </Box>
        <InputLabel htmlFor='age-native-simple'>Shelf name</InputLabel>
        <TextareaAutosize
          onChange={onChagngeReview}
          value={review}
          aria-label='minimum height'
          rowsMin={3}
          placeholder='Minimum 3 rows'
        />
        <Button onClick={handleClick}>Send review</Button>
      </div>
    </>
  )
}

export default AddReview
