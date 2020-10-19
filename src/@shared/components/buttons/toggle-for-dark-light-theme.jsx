import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import styled from 'styled-components'

import GlobalContext from '../../../store/use-global-store/context'

export default function CustomizedSwitches() {
  const { toggleTheme } = useContext(GlobalContext).global

  const handleChange = () => {
    toggleTheme()
  }

  return (
    <Container>
      <Switch
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </Container>
  )
}

const Container = styled.div`
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: #232121;
  }
  .MuiSwitch-colorSecondary.Mui-checked {
    color: #201519;
  }
`
