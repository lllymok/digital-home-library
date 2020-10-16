import React, { useContext, useEffect } from 'react'

import { ShelvesContext } from '../../store'

const Shalves = () => {
  const { shelves } = useContext(ShelvesContext)
  const gg = useContext(ShelvesContext)
  console.log(gg)

  useEffect(() => {
    // fetchBooks()
  }, [])

  if (!shelves.length) {
    return null
  }

  return (
    <>
      {shelves.map(({id,  name, category, books }) => (
        <div key={id}>
          <div key={name}>
            {name} - {category.name}
          </div>
          <div>
            {books.map(({ name, id }) => (
              <div key={id}>{name}</div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Shalves
