import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NameProvider from './context/NameContext'
import CheckProvider from './context/checkContext'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <MantineProvider>
        <NameProvider>
                <CheckProvider>
                    <App />
                </CheckProvider>
        </NameProvider>
    </MantineProvider>
</BrowserRouter>
)