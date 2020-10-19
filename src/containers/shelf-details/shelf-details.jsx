import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Rating } from '@material-ui/lab'

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

  const { name, rating } = shelfDetails

  return (
    <Container>
      <DetailsContainer>
        <Details>
          <Label>Shelf name:</Label>
          <ShelfName>{name}</ShelfName>
        </Details>
        <Details>
          <Label>Rating:</Label>
          <Rating
            name='read-only'
            value={parseInt(rating)}
            readOnly
            size='large'
          />
        </Details>
      </DetailsContainer>
      <AddReview sendReview={handleReview} />
      <Reviews reviews={shelfReviews[id]} />
    </Container>
  )
}

export default ShelfDetails

const Label = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  color: #777b8d;
  color: #777b8d;
  text-transform: inherit;
`

const DetailsContainer = styled.div`
  border-bottom: solid 1px #ddeaf5;
  padding-bottom: 8px;
  margin-bottom: 8px;
`

const ShelfName = styled.div`
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 8px;
  font-size: 1.5rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
`

const Details = styled.div`
  display: flex;
`

const Container = styled.div`
  margin-top: 80px;
  flex: 1 0 auto;
  width: 100%;
  padding: 24px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`
