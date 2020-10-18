import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Input, Select, InputLabel, FormControl } from '@material-ui/core'
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

const AddToShelf = () => {
  const classes = useStyles()
  const { shelvesStore, booksStore } = useContext(GlobalContext)
  const { shelves, addBookToShelf, booksWithShelf } = shelvesStore
  const {
    fetchBooksCategories,
    bookDetails,
    booksCategories,
    addShelfForBook,
  } = booksStore

  const { id, category: categoryName } = bookDetails

  const [shelfName, setShelfName] = useState('')
  const [shelfCategory, setShelfCategory] = useState({})

  useEffect(() => {
    fetchBooksCategories()
  }, [])

  useEffect(() => {
    if (booksWithShelf[id]) {
      setShelfCategory(booksWithShelf[id])
    } else {
      setShelfCategory({})
    }
  }, [booksWithShelf[id]])

  const onChangeShelfName = (event) => setShelfName(event.target.value)

  const handleChangeShelfCategory = (event) => {
    const shelfId = event.target.value
    addBookToShelf(bookDetails, shelfId)
  }

  return (
    <FormControl className={`${classes.formControl} form-control`}>
      <InputLabel htmlFor='age-native-simple'>Add to shelf</InputLabel>
      <Select
        native
        onChange={handleChangeShelfCategory}
        disabled={!!booksWithShelf[id]}
        value={shelfCategory.id ? shelfCategory.id : ''}>
        <option aria-label='None' value='' />
        {shelves?.map(({ id, name, category }) => (
          <option
            key={id}
            value={id}
            id={id}
            disabled={category.id ? categoryName !== category.name : false}>
            {name}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}

export default AddToShelf

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
