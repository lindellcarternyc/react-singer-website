import * as React from 'react'

import ResponsiveAppShell from './components/responsive-app-shell'

// const PAGES = [
//   'home', 'about', 'upcoming', 'photos', 'recordings'
// ]

import Home from './pages/home'
import About from './pages/about'
import Upcoming from './pages/upcoming'

const PAGES = [
  {
    name: 'home',
    render: () => <Home />
  },
  {
    name: 'about',
    render: () => <About />
  },
  {
    name: 'upcoming',
    render: () => <Upcoming />
  }
]
const PAGE_NAMES = PAGES.map(page => page.name)

class App extends React.Component {
  render() {
    const currentPage = PAGES[2]
    return (
      <ResponsiveAppShell pageNames={PAGE_NAMES} currentPage={currentPage.name}>
        {currentPage.render()}
      </ResponsiveAppShell>
    )
  }
}

export default App
