import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { initStore } from './store'

const Root = () => {
  return (
    <Router>
      <Provider store={initStore()}>
        <App />
      </Provider>
    </Router>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
