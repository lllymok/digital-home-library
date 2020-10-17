import React, { useContext } from 'react'

import { GlobalContext } from '../../store'

const Shalves = () => {
  const { shelves, shelvesBooks } = useContext(GlobalContext).shelvesStore

  if (!shelves.length) {
    return null
  }

  return (
    <>
      {shelves.map(({ id, name, category }) => (
        <div key={id}>
          <div key={name}>
            {name} - {category.name}
          </div>
          <div>
            {shelvesBooks[id]?.map(({ name, id }) => (
              <div key={id}>{name}</div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Shalves
