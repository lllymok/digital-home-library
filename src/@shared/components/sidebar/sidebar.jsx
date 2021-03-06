import React from 'react'
import styled from 'styled-components'
import { NavLink, Route } from 'react-router-dom'

import { AddToShelf } from '../../../@shared/components'

const Sidebar = () => {
  return (
    <Container>
      <Route>
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
      </Route>
    </Container>
  )
}

export default Sidebar

const ButtonNavigation = styled.div`
  cursor: pointer;
  min-height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textHover};
  :hover {
    background-color: ${({ theme }) => theme.buttonHover};
    color: ${({ theme }) => theme.buttonText};
  }
`

const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: ${({ theme }) => theme.textColor};
  text-transform: inherit;
  text-decoration: none;
  &.active {
    ${ButtonNavigation} {
      background-color: ${({ theme }) => theme.buttonColor};
      color: ${({ theme }) => theme.buttonText};
    }
  }
`

const Container = styled.div`
  width: 200px;
  background-color: #fff;
  flex-shrink: 0;
  white-space: nowrap;
  padding-top: 76px;
  overflow-x: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  left: 0;
  right: auto;
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  z-index: 1200;
  outline: none;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
`
const SidebarWrapper = styled.div``
