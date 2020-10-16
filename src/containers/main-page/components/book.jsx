import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Book = ({ name, img, id }) => {
  return (
    <Link to={`/books/details/${id}`}>
      <Container>
        <ImgContainer>
          <img src={img} />
        </ImgContainer>
        <Title>{name}</Title>
      </Container>
    </Link>
  )
}

export default Book

const Container = styled.div`
  width: 130px;
  position: relative;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  margin-right: 15px;
`

const ImgContainer = styled.div`
  height: 160px;
  width: 130px;
`

const Title = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`
