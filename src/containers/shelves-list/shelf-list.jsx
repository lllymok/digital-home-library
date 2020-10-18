import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import styled from 'styled-components'

import { GlobalContext } from '../../store'

const ShelvesList = () => {
  const { shelves } = useContext(GlobalContext).shelvesStore
  return (
    <Container>
      {shelves?.map(({ id, name }) => (
        <Shelf key={id}>
          <MenuBookIcon />
          <Link to={`/shelves-with-reviews/${id}`}>{name}</Link>
        </Shelf>
      ))}
    </Container>
  )
}

export default ShelvesList

const Container = styled.div`
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
`

const Shelf = styled.div`
  display: flex;
`
