import * as React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import ResponsiveAppShell from './components/responsive-app-shell'

// const PAGES = [
//   'home', 'about', 'upcoming', 'photos', 'recordings'
// ]

// import routes, { RouteProps } from './routes'

// import Home from './pages/home'
// import About from './pages/about'
// import Upcoming from './pages/upcoming'
// import Photos from './pages/photos'
// import Recordings from './pages/recordings'

// const PAGES = [
//   {
//     name: 'home',
//     component: Home
//   },
//   {
//     name: 'about',
//     render: () => <About />
//   },
//   {
//     name: 'upcoming',
//     render: () => <Upcoming />
//   },
//   {
//     name: 'photos',
//     render: () => <Photos />
//   },
//   {
//     name: 'recordings',
//     render: () => <Recordings />
//   }
// ]

class App extends React.Component {
  render() {
    // const currentPage = PAGES[4]
    return (
      <Router>
        <ResponsiveAppShell />
      </Router>
    )
  }
}

export default App
