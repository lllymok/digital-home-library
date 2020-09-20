import React from 'react'
import { Link } from 'react-router-dom'

import { ToggleForDarkLightTheme } from '../../../@shared/components/buttons'

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
    </div>
  )
}

export default Header
