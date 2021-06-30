import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import { TodoContextProvider } from './contexts/TodoContextProvider'

ReactDOM.render(
    <React.StrictMode>
        <TodoContextProvider>
            <App />
        </TodoContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
