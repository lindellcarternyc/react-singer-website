import * as React from 'react'

import ResponsiveAppShell from './components/responsive-app-shell'

const PAGES = [
  'home', 'about', 'upcoming', 'photos', 'recordings'
]

class App extends React.Component {
  render() {
    return (
      <ResponsiveAppShell pageNames={PAGES}/>
    )
  }
}

export default App
