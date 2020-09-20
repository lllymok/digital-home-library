import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import { GlobalContext } from '../../../store';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch)

export default function CustomizedSwitches() {

  const { toggleTheme } = useContext(GlobalContext)
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  })

  const handleChange = (event) => {
    toggleTheme()
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <FormControlLabel
      control={
        <PurpleSwitch
          checked={state.checkedA}
          onChange={handleChange}
          name='checkedA'
        />
      }
    />
  )
}
