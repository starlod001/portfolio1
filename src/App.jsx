import React from 'react'
import Page1 from './Pages/Page1'
import NavBar from './components/NavBar'
import Page2 from './pages/Page2'
import Page10 from './pages/Page10'
import Page9 from './pages/Page9'
import Page4 from './pages/Page4'
import Page3 from './pages/Page3'
import Page5 from './pages/Page5'

const App = () => {
  return (
    <div>
      <NavBar />
      <Page1 />
      <Page2 />
      <Page5 />
      <Page4 />
      <Page3 />
      <Page9 />
      <Page10 />
    </div>
  )
}

export default App
