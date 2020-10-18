import React, { useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'

import { CreateShelfForm } from '../../../@shared/components'
import { useCreateShelfModal } from '../../../@shared/hooks'
import { GlobalContext } from '../../../store'

const AddToShelf = () => {
  const { openShelfModal, ShelfModal, closeShelfModal } = useCreateShelfModal()
  const { fetchBooksCategories } = useContext(GlobalContext).booksStore

  useEffect(() => {
    fetchBooksCategories()
  }, [])

  return (
    <Container>
      <Button
        onClick={openShelfModal}
        startIcon={<AddIcon />}
        className='button'>
        Create shelf
      </Button>
      <ShelfModal>
        <CreateShelfForm onClose={closeShelfModal} />
      </ShelfModal>
    </Container>
  )
}

export default AddToShelf

const Container = styled.div`
  .button {
    margin-top: 18px;
    text-transform: inherit;
    width: 100%;
    color: ${({ theme }) => theme.backgroundHeader};
  }
`
