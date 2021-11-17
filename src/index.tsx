/* istanbul ignore file */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Developers from '@pages/Developers/Developers'
import Repositories from '@pages/Repositories/Repositories'
import reportWebVitals from './reportWebVitals'
import { ReactQueryDevtools } from 'react-query/devtools'

import './index.scss'
import Layout from '@components/Layout/Layout'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={Repositories} />
          <Route path="/developers" exact component={Developers} />
        </Switch>
      </Router>
    </Layout>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
