import React, { useContext } from 'react'
import styled from 'styled-components'

import { GlobalContext } from '../../store'
import { Book } from '../../@shared/components'

const Shalves = () => {
  const { shelves, shelvesBooks } = useContext(GlobalContext).shelvesStore
  console.log(shelves, 'shelves')
  if (!shelves.length) {
    return null
  }

  return (
    <Container>
      {shelves.map(({ id, name, category }) => (
        <Shelf key={id}>
          <CategoryContainer>
            <Label>Shelf name:</Label>
            <Category>{name}</Category>
          </CategoryContainer>
          <CategoryContainer>
            <Label>Category:</Label>
            <Category>{category.name}</Category>
          </CategoryContainer>
          <BooksContainer>
            {shelvesBooks[id]?.map((item) => (
              <Book key={item.id} {...item} />
            ))}
          </BooksContainer>
        </Shelf>
      ))}
    </Container>
  )
}

export default Shalves

const Shelf = styled.div`
  margin-bottom: 24px;
  padding-bottom: 18px;
`
const BooksContainer = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 130px 130px 130px 130px;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  position: relative;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
`

const ShelfContainer = styled.div``

const CategoryContainer = styled.div`
  display: flex;
`

const Category = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: inherit;
`

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  color: #777b8d;
  color: #777b8d;
  text-transform: inherit;
  margin-right: 8px;
`

const ShelfName = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  color: #777b8d;
  color: #777b8d;
  text-transform: inherit;
  text-transform: capitalize;
`

const Container = styled.div`
  padding: 16px;
  margin-top: 80px;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  ${Shelf} {
    :not(:last-child) {
      border-bottom: solid 1px #ddeaf5;
      padding-bottom: 18px;
    }
  }
`
