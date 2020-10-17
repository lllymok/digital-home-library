import React, { useContext } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import { GlobalStyles, lightTheme, darkTheme } from '../@shared/styled'
import { Header } from '../@shared/components'
import MainPage from './main-page/main-page'
import BookDetails from './book-details/book-details'
import Shalves from './shelves/shelves'

import {
  BooksStateProvider,
  GlobalContext,
  ShelvesStateProvider,
} from '../store'

const Main = () => {
  const { isLightTheme } = useContext(GlobalContext).global

  return (
    <ThemeProvider theme={!isLightTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        {/* <BooksStateProvider> */}
          {/* <ShelvesStateProvider> */}
            <Router>
              <Header />
              <Wrapper>
                <Switch>
                  <Route exact path='/' component={MainPage} />
                  <Route path='/books/details/:id' component={BookDetails} />
                  <Route path='/shelves' component={Shalves} />
                </Switch>
              </Wrapper>
            </Router>
          {/* </ShelvesStateProvider> */}
        {/* </BooksStateProvider> */}
      </>
    </ThemeProvider>
  )
}

export default Main

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`
