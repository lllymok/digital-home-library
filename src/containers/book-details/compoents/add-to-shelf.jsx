import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Input, Select, InputLabel, FormControl } from '@material-ui/core'
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

const AddToShelf = () => {
  const { booksCategories, fetchBooksCategories, bookDetails } = useContext(BooksContext)
  const { shelves, addBookToShelf } = useContext(ShelvesContext)
  const classes = useStyles()

  const [shelfName, setShelfName] = useState('')
  const [shelfCategory, setShelfCategory] = useState({})

  useEffect(() => {
    fetchBooksCategories()
  }, [])

  const onChangeShelfName = (event) => setShelfName(event.target.value)

  const handleChangeShelfCategory = (event) => {
    const shelfId = event.target.value
    addBookToShelf(bookDetails, shelfId)
  }



  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor='age-native-simple'>Add to shelf</InputLabel>
      <Select
        native
        onChange={handleChangeShelfCategory}
        value={shelfCategory.id}>
        <option aria-label='None' value='' />
        {shelves?.map(({ id, name }) => (
          <option key={id} value={id} id={id}>
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
