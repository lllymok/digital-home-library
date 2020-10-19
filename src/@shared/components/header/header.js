import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg'

import { ToggleForDarkLightTheme } from '../../../@shared/components'

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <IconContainer>
          <Logo />
        </IconContainer>
      </Link>
      <ToggleForDarkLightTheme />
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 67px;
  display: flex;
  padding: 0 24px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundHeader};
  z-index: 1201;
  position: fixed;
  left: 0;
  right: 0;
`
const IconContainer = styled.div`
 width: 137px;
 height 42px;
 svg {
   width: 100%;
   path {
     fill: ${({ theme }) => theme.logo}
   }
 }
`
