import React from 'react'
import styled from 'styled-components'
import  { ReactComponent as Icon } from './house-icon.svg'

const Footer = () => {
  return (
  <Container>
    <Content>
      <Icon />
    </Content>
  </Container>
  )
}

export default Footer

const Container = styled.footer`
  background-color: #f6f7f9;
  border-top: solid 0.5px rgba(112, 112, 112, 0.22);
  margin-top: 24px;
`

const Content = styled.div`
  display: flex;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0px;
  min-width: 0px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 810px;
`

