import React, { useContext } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalContext } from '../store'
import { GlobalStyles, lightTheme, darkTheme } from '../@shared/styled'
import { Header } from '../@shared/components'
import MainPage from './main-page/main-page'

const Main = () => {
  const { isLightTheme } = useContext(GlobalContext)

  return (
    <ThemeProvider theme={ !isLightTheme ? darkTheme : lightTheme}>
      <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={MainPage} />
          <Route path='/shelves' component={MainPage} />
        </Switch>
      </Router>
      </>
    </ThemeProvider>
  )
}

export default Main
