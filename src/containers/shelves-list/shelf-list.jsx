import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import styled from 'styled-components'

import { GlobalContext } from '../../store'

const ShelvesList = () => {
  const { shelves } = useContext(GlobalContext).shelvesStore
  return (
    <Container>
      <Label> Shelves </Label>
      {shelves?.map(({ id, name }) => (
        <StyledLink key={id} to={`/shelves-with-reviews/${id}`}>
          <Shelf>
            <MenuBookIcon />
            <ShelfName>{name}</ShelfName>
          </Shelf>
        </StyledLink>
      ))}
    </Container>
  )
}

export default ShelvesList

const Container = styled.div`
  margin-top: 80px;
  flex: 1 0 auto;
  width: 100%;
  padding: 8px;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  background: rgb(255, 255, 255);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const ShelfName = styled.div`
  padding: 10px;
  text-transform: capitalize;
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

const Shelf = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;
  padding-left: 8px;
  cursor: pointer;
  margin-bottom: 4px;
  background-color: ${({ theme }) => '#c3c0c55c'};
  svg {
    color: ${({ theme }) => theme.iconColor};
    path: {
      fill: ${({ theme }) => theme.textHover};
    }
  }
  :hover {
    svg {
      color: ${({ theme }) => theme.textColor};
    }
    background-color: ${({ theme }) => theme.backgroundHeader};
    color: ${({ theme }) => theme.textColor};
    ${ShelfName} {
      color: ${({ theme }) => theme.textColor};
    }
  }
`

const StyledLink = styled(Link)`
  text-transform: none;
  text-decoration: none;
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  color: #777b8d;
  text-transform: inherit;
`
