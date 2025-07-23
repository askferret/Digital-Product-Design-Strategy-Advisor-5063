import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from './context/ThemeContext'
import {ChatProvider} from './context/ChatContext'
import {DataProvider} from './context/DataContext'
import {AppProvider} from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <DataProvider>
          <ChatProvider>
            <AppProvider>
              <App />
            </AppProvider>
          </ChatProvider>
        </DataProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)