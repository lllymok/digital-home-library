import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../store'

const ShelvesList = () => {
  const { shelves } = useContext(GlobalContext).shelvesStore
  return (
    <div>
      {shelves?.map(({ id, name }) => (
        <div key={id}>
          <Link to={`/shelves-with-reviews/${id}`}>{name}</Link>
        </div>
      ))}
    </div>
  )
}

export default ShelvesList
