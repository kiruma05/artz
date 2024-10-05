import React from 'react'
import { Container, ThemeProvider } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function WebLayout() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <Sidebar />
  <Container style={{ maxHeight: '100vh', maxWidth: '100vw', padding: '0' }}>
  <Outlet />
</Container>

</ThemeProvider>
  )
}

export default WebLayout