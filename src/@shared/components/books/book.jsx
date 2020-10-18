import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Book = ({ name, img, id }) => {
  return (
    <LinkContainer to={`/books/details/${id}`}>
      <Container>
        <ImgContainer>
          <img src={img} />
        </ImgContainer>
        <Title>{name}</Title>
      </Container>
    </LinkContainer>
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
  img {
    height: 100%;
    width: 100%;
  }
`

const LinkContainer = styled(Link)`
  text-decoration: none;
`

const Title = styled.div`
  padding: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01071em;
  letter-spacing: 0.01071em;
`
