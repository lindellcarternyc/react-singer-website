import * as React from 'react'

import ResponsiveAppShell from './components/responsive-app-shell'

// const PAGES = [
//   'home', 'about', 'upcoming', 'photos', 'recordings'
// ]

import Home from './pages/home'
import About from './pages/about'
import Upcoming from './pages/upcoming'
import Photos from './pages/photos'
import Recordings from './pages/recordings'

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
  },
  {
    name: 'photos',
    render: () => <Photos />
  },
  {
    name: 'recordings',
    render: () => <Recordings />
  }
]
const PAGE_NAMES = PAGES.map(page => page.name)

class App extends React.Component {
  render() {
    const currentPage = PAGES[3]
    return (
      <ResponsiveAppShell pageNames={PAGE_NAMES} currentPage={currentPage.name}>
        {currentPage.render()}
      </ResponsiveAppShell>
    )
  }
}

export default App
