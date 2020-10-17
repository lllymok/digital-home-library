import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { CreateShelfForm } from '../../../@shared/components'
import { useCreateShelfModal } from '../../../@shared/hooks'
import { GlobalContext } from '../../../store'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const AddToShelf = () => {
  const { openShelfModal, ShelfModal, closeShelfModal } = useCreateShelfModal()
  const { fetchBooksCategories} = useContext(GlobalContext).booksStore

  const classes = useStyles()
  useEffect(() => {
    fetchBooksCategories()
  }, [])

  return (
    <div className={classes.root}>
      <Button variant='contained' color='primary' onClick={openShelfModal}>
        Create shelf
      </Button>
      <ShelfModal>
        <CreateShelfForm onClose={closeShelfModal} />
      </ShelfModal>
    </div>
  )
}

export default AddToShelf
