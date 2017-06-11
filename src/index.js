import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import { Router, Route, IndexRoute } from "react-router"
import { browserHistory } from "react-router"
import Home from "./components/Home"
import Fullscreen from "./components/Fullscreen"

const store = createStore(reducer)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/fullscreen" component={Fullscreen}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
