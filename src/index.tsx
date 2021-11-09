import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ReactDOM from "react-dom"
import Developers from "@pages/Developers"
import Repositories from "@pages/Repositories"
import reportWebVitals from "./reportWebVitals"

import "./index.scss"

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Repositories} />
    <Route path="/developers" exact component={Developers} />
  </Router>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
