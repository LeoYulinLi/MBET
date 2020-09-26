import React, { useState } from 'react'
import './styles/index.scss'
import AccountIndex from "./components/AccountIndex";
import { BottomNavigation, BottomNavigationAction, Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="sm">
      <AccountIndex />
    </Container>
  )
}

export default App
