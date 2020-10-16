import React from 'react'
import { Link } from 'react-router-dom'

import { ToggleForDarkLightTheme, AddToShelf } from '../../../@shared/components'


const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shelves'>Shelves</Link>
        </li>
      </ul>
      <ToggleForDarkLightTheme />
      <AddToShelf />
    </div>
  )
}

export default Header
