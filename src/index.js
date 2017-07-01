//Librar(y|ies)
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//Child Components
import App from './App'

//Styles
import './index.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
