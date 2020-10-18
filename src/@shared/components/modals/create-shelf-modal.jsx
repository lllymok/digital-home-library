import React from 'react'
import { Modal } from '@material-ui/core'
import styled from 'styled-components'

const ShelfModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      <Container className='container'>{children}</Container>
    </Modal>
  )
}

export default ShelfModal

const Container = styled.div`
    user-select: none;
    background: #FFFFFF;
    border-radius: 8px;
    max-width: 400px;
    position: relative;
    flex: 1;
    padding-top: 16px;
    padding-bottom: 24px;
    max-height: 100%;
    margin: 0 auto;
    outline: none;
    margin-top: 10vh;
}
`
