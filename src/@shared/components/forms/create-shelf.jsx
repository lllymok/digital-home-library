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

import { GlobalContext } from '../../../store'

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
  const { shelvesStore, booksStore } = useContext(GlobalContext)
  const { createShelf } = shelvesStore
  const { booksCategories } = booksStore

  const classes = useStyles()

  const [shelfName, setShelfName] = useState('')
  const [shelfCategory, setShelfCategory] = useState({})

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
    <Container>
      <h3 className="headTitle" id='simple-modal-title'>Create shelf</h3>
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
        className='add-shelf'
        disabled={!isDisabled}
        variant='contained'
        color='primary'
        onClick={addShelf}>
        Create
      </Button>
    </Container>
  )
}

export default CreateShelfForm

const Container = styled.div`
  padding: 18px;
  .headTitle {
    color: ${({ theme }) => theme.headTitle};
  }
  .add-shelf {
    text-transform: inherit;
    height: 28px;
    width: 100%;
    margin-top: 8px;
    background: ${({ theme }) => theme.buttonColor};
 
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
