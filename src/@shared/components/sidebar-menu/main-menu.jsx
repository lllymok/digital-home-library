import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { AddToShelf } from '../../..//@shared/components'

const MainMenu = () => {
  return (
    <>
      <SidebarWrapper>
        <StyledNavLink exact activeClassName='active' to='/'>
          <ButtonNavigation>Books</ButtonNavigation>
        </StyledNavLink>
        <StyledNavLink activeClassName='active' to='/shelves'>
          <ButtonNavigation>Shelves</ButtonNavigation>
        </StyledNavLink>
        <StyledNavLink activeClassName='active' to='/shelves-with-reviews'>
          <ButtonNavigation>Shelves with Reviews</ButtonNavigation>
        </StyledNavLink>
      </SidebarWrapper>
      <AddToShelf />
    </>
  )
}

export default MainMenu

const ButtonNavigation = styled.div`
  cursor: pointer;
  min-height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.backgroundHeader};
  :hover {
    background-color: ${({ theme }) => theme.textHover};
    color: ${({ theme }) => theme.textColor};
  }
`

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: inherit;
  text-transform: inherit;
  text-decoration: none;
  &.active {
    ${ButtonNavigation} {
      background-color: ${({ theme }) => theme.backgroundHeader};
      color: ${({ theme }) => theme.textColor};
    }
  }
`

const SidebarWrapper = styled.div``
