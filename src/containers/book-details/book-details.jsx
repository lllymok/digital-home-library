import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Rating } from '@material-ui/lab'

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

  const { name, img, category, rating, genres } = bookDetails

  return (
    <Container>
      <Content>
        <WrapperDetails>
          <ImageContainer>
            <img src={img} />
          </ImageContainer>
          <Details>
            <RatingContainer>
              <Rating
                name='read-only'
                value={parseInt(rating)}
                readOnly
                size='large'
              />
            </RatingContainer>
            <BookName>{name}</BookName>
            <CategoryContainer>
              <Label>Category:</Label>
              <Category>{category}</Category>
            </CategoryContainer>
            <CategoryContainer>
              <Label>Genre:</Label>
              <Category>{genres}</Category>
            </CategoryContainer>
            <AddToShelf />
          </Details>
        </WrapperDetails>
        <AddReview />
        <Reviews />
      </Content>
    </Container>
  )
}

export default MainPage

const Details = styled.div`
  padding-top: 24px;
  margin-left: 32px;
  .form-control {
    margin: 0px;
  }
`

const RatingContainer = styled.div``
const CategoryContainer = styled.div`
  display: flex;
  margin-top: 12px;
`

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #777b8d;
  text-transform: inherit;
  margin-right: 8px;
`
const Category = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.headTitle};
`
const BookName = styled.div`
  margin-top: 26px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.5rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
`

const Container = styled.div`
  margin-top: 180px;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const ImageContainer = styled.div`
  max-width: 310px;

  img {
    max-height: 380px;
    max-width: 310px;
    margin-top: -56px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: opacity 0.5s ease 0s;
  }
`
const WrapperDetails = styled.div`
  flex: 0 0 310px;
  display: flex;
  border-bottom: solid 1px #ddeaf5;
`

const Content = styled.div`
  position: relative;
  max-width: 810px;

  margin-left: auto;
  margin-right: auto;
  /* padding-top: 48px; */
`
