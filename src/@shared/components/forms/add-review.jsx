import React, { useState } from 'react'
import { Rating } from '@material-ui/lab'
import { TextareaAutosize, Button } from '@material-ui/core'
import styled from 'styled-components'

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
    clearData()
  }

  const isDisabled = !review.length

  return (
    <Container>
      <LabelCotainer>
        <Label>Add review</Label>
      </LabelCotainer>
      <div>
        <RatingContainer>
          <Label1>Rating</Label1>
          <Rating
            name='simple-controlled'
            className='rating'
            value={rating}
            onChange={(event, newValue) => onChangeRating(newValue)}
          />
        </RatingContainer>
        <Label1>Your review</Label1>
        <TextareaAutosize
          className='review'
          onChange={onChagngeReview}
          value={review}
          aria-label='minimum height'
          rowsMin={3}
          placeholder='Type here you review'
        />
        <Button
          className='add-shelf'
          disabled={isDisabled}
          variant='contained'
          color='primary'
          onClick={handleClick}>
          Send review
        </Button>
      </div>
    </Container>
  )
}

export default AddReview

const Container = styled.div`
  .add-shelf {
    text-transform: inherit;
    height: 28px;
    margin-top: 8px;
    background: ${({ theme }) => theme.buttonColor};
  }
  .review {
    width: 100%;
    border: 2px solid #e7ebf2;
    font-size: 14px;
    padding: 10px;
    padding-top: 8px;
    border-radius: 8px;
  }
  padding-bottom: 24px;
  border-bottom: solid 1px #ddeaf5;
`

const RatingContainer = styled.div`
  margin-bottom: 8px;
  .rating {
    padding: 0px;
  }
`
const Label1 = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.headTitle};
  margin-bottom: 8px;
`

const LabelCotainer = styled.div`
  padding: 18px 24px 18px 0px;
`
const Label = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  color: #777b8d;
  color: #777b8d;
  text-transform: inherit;
`
