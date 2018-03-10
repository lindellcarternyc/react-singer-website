import Home from './pages/home'
import About from './pages/about'
import Performances from './pages/peformances'
import Photos from './pages/photos'
import Recordings from './pages/recordings'

export interface RouteProps {
  path: string,
  exact?: boolean
  name: string
  component: React.ComponentType
}
export const routes: RouteProps[] = [
    {
      path: '/',
      exact: true,
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/performances',
      name: 'performances',
      component: Performances
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/recordings',
      name: 'recordings',
      component: Recordings
    }
]

export default routes