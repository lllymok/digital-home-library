import React, { useContext } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import { GlobalStyles, lightTheme, darkTheme } from '../@shared/styled'
import { Header } from '../@shared/components'

import MainPage from './main-page/main-page'
import BookDetails from './book-details/book-details'
import Shelves from './shelves/shelves'
import ShelvesList from './shelves-list/shelf-list'
import ShelfDetails from './shelf-details/shelf-details'

import { GlobalContext } from '../store'

const Main = () => {
  const { isLightTheme } = useContext(GlobalContext).global

  return (
    <ThemeProvider theme={!isLightTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Header />
          <Wrapper>
              <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/books/details/:id' component={BookDetails} />
                <Route path='/shelves' component={Shelves} />
                <Route
                  exact
                  path='/shelves-with-reviews'
                  component={ShelvesList}
                />
                <Route
                  path='/shelves-with-reviews/:id'
                  component={ShelfDetails}
                />
              </Switch>
          </Wrapper>
        </Router>
      </>
    </ThemeProvider>
  )
}

export default Main

const Wrapper = styled.div`
  margin-left: 200px;
  flex: 1 0 auto;
  width: 100%;
  max-width: 1060px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding-top: 36px;
`