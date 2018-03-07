import * as React from 'react'

import ResponsiveAppShell from './components/responsive-app-shell'

const PAGES = [
  'home', 'about', 'upcoming', 'photos', 'recordings'
]

import Home from './pages/home'

class App extends React.Component {
  render() {
    return (
      <ResponsiveAppShell pageNames={PAGES}>
        <Home />
      </ResponsiveAppShell>
    )
  }
}

export default App
