import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Input,
  Select,
  InputLabel,
  Button,
  FormControl,
} from '@material-ui/core'
import styled from 'styled-components'

import { BooksContext, ShelvesContext } from '../../../store'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const CreateShelfForm = ({ onClose }) => {
  const { booksCategories, fetchBooksCategories } = useContext(BooksContext)
  const { createShelf } = useContext(ShelvesContext)
  const classes = useStyles()

  const [shelfName, setShelfName] = useState('')
  const [shelfCategory, setShelfCategory] = useState({})

  useEffect(() => {
    fetchBooksCategories()
  }, [])

  const onChangeShelfName = (event) => setShelfName(event.target.value)

  const handleChangeShelfCategory = (event) => {
    const categoryId = event.target.value
    const selectedCategory = booksCategories.find(
      ({ id }) => id === +categoryId
    )
    setShelfCategory(selectedCategory)
  }

  const addShelf = () => {
    createShelf({ name: shelfName, category: { ...shelfCategory } })
    onClose()
  }

  const isDisabled = shelfName.length > 0

  return (
    <div>
      <h2 id='simple-modal-title'>Create the Shelf</h2>
      <InputContainer>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-native-simple'>Shelf name</InputLabel>
          <Input
            placeholder='Type here'
            value={shelfName}
            onChange={onChangeShelfName}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='age-native-simple'>Select category</InputLabel>
          <Select
            native
            onChange={handleChangeShelfCategory}
            value={shelfCategory.id}>
            <option aria-label='None' value='' />
            {booksCategories.map(({ id, name }) => (
              <option key={id} value={id} id={id}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
      </InputContainer>

      <Button
        disabled={!isDisabled}
        variant='contained'
        color='primary'
        onClick={addShelf}>
        Add shelf
      </Button>
    </div>
  )
}

export default CreateShelfForm

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
