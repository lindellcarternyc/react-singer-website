import * as React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ResponsiveAppShell from './components/responsive-app-shell'

// const PAGES = [
//   'home', 'about', 'upcoming', 'photos', 'recordings'
// ]

import routes, { RouteProps } from './routes'

import Home from './pages/home'
import About from './pages/about'
import Upcoming from './pages/upcoming'
import Photos from './pages/photos'
import Recordings from './pages/recordings'

const PAGES = [
  {
    name: 'home',
    component: Home
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

const makeRoutes = (routeProps: RouteProps[]): JSX.Element[] => {
  return routeProps.map(route => {
    const { name, path, exact, component } = route
    return <Route key={name} path={path} exact={exact} component={component} />
  })
}

class App extends React.Component {
  render() {
    const currentPage = PAGES[4]
    return (
      <Router>
        <ResponsiveAppShell currentPage={currentPage.name}>
          <Switch>
            {makeRoutes(routes)}
          </Switch>
        </ResponsiveAppShell>
      </Router>
    )
  }
}

export default App
